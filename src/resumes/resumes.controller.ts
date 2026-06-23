import {
  Controller,
  Post,
  Get,
  Delete,
  UseGuards,
  Body,
  Request,
  UsePipes,
  Param,
  Res,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { type Response } from 'express';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ZodValidationPipe } from 'src/validation.pipe';
import { ResumesService } from './resumes.service';
import {
  type CreateResumeDto,
  createResumeSchema,
} from './dto/create-resume.dto';
import {
  type BulkDeleteResumeDto,
  bulkDeleteResumeSchema,
} from './dto/bulk-delete-resume.dto';
import {
  type FilterResumeDto,
  filterResumeSchema,
} from './dto/filter-resume.dto';
import {
  type GenerateResumeDto,
  generateResumeSchema,
} from './dto/generate-resume.dto';
import {
  type AnswerQuestionsDto,
  answerQuestionsSchema,
} from './dto/answer-questions.dto';
import { type FromJsonDto, fromJsonSchema } from './dto/from-json.dto';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';

@Controller('resumes')
export class ResumesController {
  constructor(private resumesService: ResumesService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  @UsePipes(new ZodValidationPipe(filterResumeSchema))
  async findAll(@Request() req, @Query() filters: FilterResumeDto) {
    return this.resumesService.findAllByUserId(req.user._id, filters);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(new ZodValidationPipe(createResumeSchema))
  async create(
    @Request() req,
    @Body() createResumeDto: CreateResumeDto,
    @Res() res: Response,
  ) {
    const { pdfBuffer, userName } = await this.resumesService.create(
      req.user._id,
      req.user.name,
      createResumeDto.companyName,
      createResumeDto.roleType,
      createResumeDto.jsonContent,
      req.user.template,
    );

    // Set headers for PDF download - use user name for consistent filename
    const sanitizedName = userName
      .replace(/[^a-zA-Z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, ' ');
    const filename = `${sanitizedName}.pdf`;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', pdfBuffer.length);

    // Send PDF buffer
    res.send(pdfBuffer);
  }

  @UseGuards(JwtAuthGuard)
  @Post('generate')
  @UsePipes(new ZodValidationPipe(generateResumeSchema))
  async generate(
    @Request() req,
    @Body() generateResumeDto: GenerateResumeDto,
    @Res() res: Response,
  ) {
    // Set headers for Server-Sent Events
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no'); // Disable nginx buffering

    try {
      // Create resume record with in_progress status first
      const resumeRecord = await this.resumesService.createInProgress(
        req.user._id,
        generateResumeDto.companyName,
        generateResumeDto.roleType,
        generateResumeDto.jobDescription,
        generateResumeDto.aiModel,
        generateResumeDto.aiVersion,
      );

      // Send resume ID immediately so frontend can redirect
      res.write(
        `data: ${JSON.stringify({
          type: 'started',
          resumeId: resumeRecord._id.toString(),
        })}\n\n`,
      );
      res.end();

      // Generate resume asynchronously in the background (this will update the record when done)
      // PDF is generated and saved to disk, but not sent in response
      // User can download it manually using the download button
      this.resumesService
        .generateResume(
          resumeRecord._id.toString(),
          req.user._id,
          req.user.name,
          req.user.template,
          generateResumeDto.industry,
        )
        .catch((error) => {
          // Log error but don't throw since response is already sent
          console.error('Error generating resume in background:', error);
        });
    } catch (error) {
      res.write(
        `data: ${JSON.stringify({
          type: 'error',
          message: error.message || 'Failed to generate resume',
        })}\n\n`,
      );
      res.end();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('from-json')
  @UsePipes(new ZodValidationPipe(fromJsonSchema))
  async generateFromJson(
    @Request() req,
    @Body() fromJsonDto: FromJsonDto,
    @Res() res: Response,
  ) {
    const json = { ...fromJsonDto.jsonContent };
    if (json.cover_letter) {
      delete json.cover_letter;
    }
    
    if (json.contact?.email?.includes('](mailto:')) {
      json.contact.email = json.contact.email.match(/\[([^\]]+)\]\(mailto:[^)]+\)/)?.[1] ?? json.contact.email;
    }

    const { pdfBuffer, userName } = await this.resumesService.create(
      req.user._id,
      req.user.name,
      fromJsonDto.companyName,
      fromJsonDto.roleType,
      fromJsonDto.jobDescription,
      json,
      req.user.template,
      undefined,
      'completed',
      fromJsonDto.aiModel,
      fromJsonDto.aiVersion,
    );
    const sanitizedName = userName
      .replace(/[^a-zA-Z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '_');

    console.log(`\n=====================================================================================\nGenerated successfully at ${new Date()}: \nName: ${userName}, Company: ${fromJsonDto.companyName}, Title: ${fromJsonDto.roleType}`);

    const filename = `${sanitizedName}.pdf`;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', pdfBuffer.length);
    res.send(pdfBuffer);
  }

  @UseGuards(JwtAuthGuard)
  @Post('answer-questions')
  @UsePipes(new ZodValidationPipe(answerQuestionsSchema))
  async answerQuestions(
    @Request() req,
    @Body() answerQuestionsDto: AnswerQuestionsDto,
  ) {
    // Get resume with job description
    const resume = await this.resumesService.findOne(
      answerQuestionsDto.resumeId,
      req.user._id,
    );

    if (!resume) {
      throw new NotFoundException('Resume not found');
    }

    if (!resume.jobDescription) {
      throw new NotFoundException('Job description not found for this resume');
    }

    if (!resume.jsonFilePath || !existsSync(resume.jsonFilePath)) {
      throw new NotFoundException('Resume JSON file not found');
    }

    const jsonContent = await readFile(resume.jsonFilePath, 'utf-8');
    const resumeJson = JSON.parse(jsonContent);

    // Parse questions from text and answer them in a single AI call
    const qaPairs = await this.resumesService.parseAndAnswerQuestions(
      answerQuestionsDto.questions,
      resumeJson,
      resume.jobDescription,
      req.user._id,
      resume.aiModel,
      resume.aiVersion,
    );

    if (qaPairs.length === 0) {
      throw new NotFoundException('No valid questions and answers could be generated from the provided text');
    }

    // Ensure all answers are plain strings
    const cleanedQaPairs = qaPairs.map((qa) => ({
      question: String(qa.question),
      answer: String(qa.answer),
    }));

    // Get existing answers and append new ones
    const existingAnswers = resume.answers || [];
    const cleanedExistingAnswers = existingAnswers.map((qa: any) => ({
      question: String(qa.question),
      answer: String(qa.answer),
    }));

    const allAnswers = [...cleanedExistingAnswers, ...cleanedQaPairs];

    // Update the resume with new answers
    await this.resumesService.updateAnswers(
      answerQuestionsDto.resumeId,
      req.user._id,
      allAnswers,
    );

    return {
      questions: cleanedQaPairs.map((qa) => qa.question),
      answers: cleanedQaPairs.map((qa) => qa.answer),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/download')
  async downloadResume(
    @Request() req,
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    const pdfBuffer = await this.resumesService.downloadResumePDF(
      id,
      req.user._id,
      req.user.template,
    );
    const userName = req.user.name;

    // Set headers for PDF download - use user name for consistent filename
    const sanitizedName = userName
      .replace(/[^a-zA-Z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '_')
      ;
    const filename = `${sanitizedName}.pdf`;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', pdfBuffer.length);

    // Send PDF buffer
    res.send(pdfBuffer);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/download-json')
  async downloadResumeJSON(
    @Request() req,
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    const jsonContent = await this.resumesService.downloadResumeJSON(
      id,
      req.user._id,
    );
    const userName = req.user.name;

    // Set headers for JSON download - use user name for consistent filename
    const sanitizedName = userName
      .replace(/[^a-zA-Z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '_');
    const filename = `${sanitizedName}.json`;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', Buffer.byteLength(jsonContent, 'utf-8'));

    // Send JSON content
    res.send(jsonContent);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/download-cover-letter')
  async downloadCoverLetter(
    @Request() req,
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    const pdfBuffer = await this.resumesService.downloadCoverLetterPDF(
      id,
      req.user._id,
    );

    const userName = req.user.name;
    const sanitizedName = userName
      .replace(/[^a-zA-Z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '_')
      ;

    const filename = `${sanitizedName}_Cover_Letter.pdf`;

    // Set headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', pdfBuffer.length);

    // Send PDF buffer
    res.send(pdfBuffer);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Request() req, @Param('id') id: string) {
    return this.resumesService.findOne(id, req.user._id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('bulk/delete')
  @UsePipes(new ZodValidationPipe(bulkDeleteResumeSchema))
  async bulkDelete(@Request() req, @Body() bulkDeleteDto: BulkDeleteResumeDto) {
    const result = await this.resumesService.bulkDelete(
      bulkDeleteDto.ids,
      req.user._id,
    );
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Request() req, @Param('id') id: string) {
    await this.resumesService.delete(id, req.user._id);
    return { message: 'Resume deleted successfully' };
  }
}
