import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import { ResumeData } from 'src/resumes/templates';
import {
  type AiProvider,
  resolveApiModelId,
} from '../ai/ai-models';
import { RESUME_JSON_SCHEMA } from '../ai/resume-json-schema';

@Injectable()
export class OpenAIService {
  private client: OpenAI;
  private anthropicClient: Anthropic | null = null;

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('openai.apiKey');
    if (!apiKey) {
      throw new Error('OpenAI API key is not configured');
    }
    this.client = new OpenAI({
      apiKey: apiKey,
    });

    const anthropicApiKey = this.configService.get<string>('anthropic.apiKey');
    if (anthropicApiKey) {
      this.anthropicClient = new Anthropic({
        apiKey: anthropicApiKey,
      });
    }
  }

  private cleanText(text: string): string {
    return text.replace(/\s+/g, ' ').trim();
  }

  async generateResume(
    jobDescription: string,
    userInstructions: string,
    aiProvider: AiProvider = 'openai',
    aiVersion: string = 'gpt-4.1-mini',
  ): Promise<{ resumeJson: ResumeData; threadId: string }> {
    if (!userInstructions || !userInstructions.trim()) {
      throw new Error('User instructions are required and cannot be empty');
    }

    const fullInstructions = this.cleanText(userInstructions);
    const conversationId = `conv_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const cleanedJobDescription = this.cleanText(jobDescription);
    const apiModelId = resolveApiModelId(aiProvider, aiVersion);

    let resumeJson: ResumeData;

    if (aiProvider === 'claude') {
      resumeJson = await this.generateResumeWithClaude(
        cleanedJobDescription,
        fullInstructions,
        apiModelId,
      );
    } else {
      resumeJson = await this.generateResumeWithOpenAI(
        cleanedJobDescription,
        fullInstructions,
        apiModelId,
      );
    }

    return {
      resumeJson,
      threadId: conversationId,
    };
  }

  private async generateResumeWithOpenAI(
    jobDescription: string,
    instructions: string,
    model: string,
  ): Promise<ResumeData> {
    const response = await this.client.responses.create({
      model,
      instructions,
      input: jobDescription,
      text: {
        format: {
          type: 'json_schema',
          name: 'resume',
          strict: true,
          schema: RESUME_JSON_SCHEMA,
        },
      },
    });

    if (!response.output_text) {
      throw new Error('No output text received from OpenAI');
    }

    try {
      return JSON.parse(response.output_text);
    } catch (error) {
      throw new Error(
        `Failed to parse JSON from OpenAI response: ${error.message}. Response: ${response.output_text.substring(0, 200)}`,
      );
    }
  }

  private async generateResumeWithClaude(
    jobDescription: string,
    instructions: string,
    model: string,
  ): Promise<ResumeData> {
    if (!this.anthropicClient) {
      throw new Error(
        'Anthropic API key is not configured. Set ANTHROPIC_API_KEY in environment.',
      );
    }

    const schemaPrompt = `You must respond with valid JSON only, matching this schema exactly:\n${JSON.stringify(RESUME_JSON_SCHEMA)}`;

    const response = await this.anthropicClient.messages.create({
      model,
      max_tokens: 16384,
      system: `${instructions}\n\n${schemaPrompt}`,
      messages: [
        {
          role: 'user',
          content: jobDescription,
        },
      ],
    });

    const textBlock = response.content.find((block) => block.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No text output received from Claude');
    }

    const outputText = textBlock.text.trim();
    const jsonText = outputText.startsWith('```')
      ? outputText.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '')
      : outputText;

    try {
      return JSON.parse(jsonText);
    } catch (error) {
      throw new Error(
        `Failed to parse JSON from Claude response: ${error.message}. Response: ${outputText.substring(0, 200)}`,
      );
    }
  }

  async parseAndAnswerQuestions(
    questionsText: string,
    resumeJson: Record<string, any>,
    jobDescription: string,
    customPrompt?: string,
    aiProvider: AiProvider = 'openai',
    aiVersion: string = 'gpt-4.1-mini',
  ): Promise<Array<{ question: string; answer: string }>> {
    const instructions =
      customPrompt ||
      `
      You are an assistant who answers questions while job applying on behalf of me.  
      The job description and resume JSON content will be provided.

      Answers must be specific and always positive.  
      For any "describe" type question, the answer should be 2-4 sentences.

      The goal is to make HR want to contact me for next steps.
    `;

    const cleanedJobDescription = this.cleanText(jobDescription);
    const cleanedInstructions = this.cleanText(instructions);
    const cleanedQuestionsText = this.cleanText(questionsText);

    const resumeCopy: Record<string, any> = { ...(resumeJson || {}) };
    if (resumeCopy.cover_letter) {
      delete resumeCopy.cover_letter;
    }

    const compactResumeJson = JSON.stringify(resumeCopy);
    const fullInstructions = `${cleanedInstructions} Job Description: ${cleanedJobDescription} Resume Information: ${compactResumeJson}`;
    const apiModelId = resolveApiModelId(aiProvider, aiVersion);

    if (aiProvider === 'claude') {
      return this.parseAndAnswerQuestionsWithClaude(
        cleanedQuestionsText,
        fullInstructions,
        apiModelId,
      );
    }

    return this.parseAndAnswerQuestionsWithOpenAI(
      cleanedQuestionsText,
      fullInstructions,
      apiModelId,
    );
  }

  private async parseAndAnswerQuestionsWithOpenAI(
    questionsText: string,
    instructions: string,
    model: string,
  ): Promise<Array<{ question: string; answer: string }>> {
    const response = await this.client.responses.create({
      model,
      instructions,
      input: questionsText,
      text: {
        format: {
          type: 'json_schema',
          name: 'questions_and_answers',
          strict: true,
          schema: {
            type: 'object',
            properties: {
              questions_and_answers: {
                type: 'array',
                minItems: 1,
                items: {
                  type: 'object',
                  properties: {
                    question: {
                      type: 'string',
                      minLength: 1,
                    },
                    answer: {
                      type: 'string',
                      minLength: 1,
                    },
                  },
                  required: ['question', 'answer'],
                  additionalProperties: false,
                },
              },
            },
            required: ['questions_and_answers'],
            additionalProperties: false,
          },
        },
      },
    });

    if (!response.output_text) {
      throw new Error('No output text received from OpenAI');
    }

    return this.parseQuestionsResponse(response.output_text);
  }

  private async parseAndAnswerQuestionsWithClaude(
    questionsText: string,
    instructions: string,
    model: string,
  ): Promise<Array<{ question: string; answer: string }>> {
    if (!this.anthropicClient) {
      throw new Error(
        'Anthropic API key is not configured. Set ANTHROPIC_API_KEY in environment.',
      );
    }

    const schemaPrompt =
      'Respond with valid JSON only in this format: {"questions_and_answers": [{"question": "...", "answer": "..."}]}';

    const response = await this.anthropicClient.messages.create({
      model,
      max_tokens: 8192,
      system: `${instructions}\n\n${schemaPrompt}`,
      messages: [
        {
          role: 'user',
          content: questionsText,
        },
      ],
    });

    const textBlock = response.content.find((block) => block.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No text output received from Claude');
    }

    const outputText = textBlock.text.trim();
    const jsonText = outputText.startsWith('```')
      ? outputText.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '')
      : outputText;

    return this.parseQuestionsResponse(jsonText);
  }

  private parseQuestionsResponse(
    outputText: string,
  ): Array<{ question: string; answer: string }> {
    try {
      const parsed = JSON.parse(outputText)['questions_and_answers'];
      if (Array.isArray(parsed)) {
        return parsed
          .filter(
            (qa) =>
              qa &&
              typeof qa.question === 'string' &&
              typeof qa.answer === 'string',
          )
          .map((qa) => ({
            question: qa.question.trim(),
            answer: qa.answer.trim(),
          }))
          .filter((qa) => qa.question.length > 0 && qa.answer.length > 0);
      }
      throw new Error('Invalid response format: expected array');
    } catch (error) {
      throw new Error(
        `Failed to parse JSON from AI response: ${error.message}. Response: ${outputText.substring(0, 200)}`,
      );
    }
  }
}
