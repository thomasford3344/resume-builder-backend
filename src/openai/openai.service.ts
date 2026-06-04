import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { ResumeData } from 'src/resumes/templates';

@Injectable()
export class OpenAIService {
  private client: OpenAI;

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('openai.apiKey');
    if (!apiKey) {
      throw new Error('OpenAI API key is not configured');
    }
    this.client = new OpenAI({
      apiKey: apiKey,
    });
  }

  /**
   * Clean text by removing double spaces and newline breaks to save tokens
   * @param text The text to clean
   * @returns Cleaned text with single spaces, no newlines
   */
  private cleanText(text: string): string {
    return text
      .replace(/\s+/g, ' ') // Replace all whitespace (spaces, tabs, newlines) with single space
      .trim(); // Remove leading/trailing whitespace
  }

  /**
   * Generate a resume JSON based on job description and instructions
   * @param jobDescription The job description
   * @param instructions Additional instructions for resume generation
   * @returns Object containing the generated resume JSON and conversation ID for tracking
   */
  async generateResume(
    jobDescription: string,
    userInstructions: string,
  ): Promise<{ resumeJson: ResumeData; threadId: string }> {
    // Validate user instructions
    if (!userInstructions || !userInstructions.trim()) {
      throw new Error('User instructions are required and cannot be empty');
    }

    // Clean instructions to save tokens (remove double spaces and normalize newlines)
    const fullInstructions = this.cleanText(userInstructions);

    // Generate a unique conversation ID
    const conversationId = `conv_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // Clean job description to save tokens
    const cleanedJobDescription = this.cleanText(jobDescription);

    // Call the responses API with JSON schema (no streaming)
    const response = await this.client.responses.create({
      model: 'gpt-5',
      instructions: fullInstructions,
      input: cleanedJobDescription,
      text: {
        format: {
          type: 'json_schema',
          name: 'resume',
          strict: true,
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                minLength: 1,
              },
              title: {
                type: 'string',
                minLength: 1,
              },
              contact: {
                type: 'object',
                properties: {
                  address: {
                    type: 'string',
                    minLength: 1,
                  },
                  email: {
                    type: 'string',
                    minLength: 1,
                  },
                  phone: {
                    type: 'string',
                    minLength: 1,
                  },
                  linkedin: {
                    type: 'string',
                    minLength: 1,
                  },
                },
                required: ['address', 'email', 'phone', 'linkedin'],
                additionalProperties: false,
              },
              summary: {
                type: 'string',
                minLength: 1,
              },
              skills: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    category: {
                      type: 'string',
                      enum: [
                        'Backend',
                        'Frontend',
                        'Cloud',
                        'Data',
                        'Tools',
                        'Industry',
                        'Mobile',
                        'AI',
                        'DevOps',
                        'Security',
                        'Data Engineering',
                        'Platform',
                      ],
                    },
                    items: {
                      type: 'array',
                      items: { type: 'string' },
                      minItems: 6,
                    },
                  },
                  required: ['category', 'items'], // ✅ must include ALL properties
                  additionalProperties: false,
                },
                minItems: 3,
              },
              experience: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    title: {
                      type: 'string',
                      minLength: 1,
                    },
                    company: {
                      type: 'string',
                      minLength: 1,
                    },
                    date_range: {
                      type: 'string',
                      minLength: 1,
                    },
                    job_type: {
                      type: 'string',
                      minLength: 1,
                    },
                    responsibilities: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                      minItems: 5,
                    },
                    achievements: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                      minItems: 4,
                    },
                    skills: {
                      type: 'array',
                      items: {
                        type: 'string',

                      },
                      minItems: 3,
                    },
                  },
                  required: [
                    'title',
                    'company',
                    'date_range',
                    'job_type',
                    'responsibilities',
                    'achievements',
                    'skills',
                  ],
                  additionalProperties: false,
                },
                minItems: 1,
              },
              education: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    degree: {
                      type: 'string',
                      minLength: 1,
                    },
                    institution: {
                      type: 'string',
                      minLength: 1,
                    },
                    location: {
                      type: 'string',
                      minLength: 1,
                    },
                    date_range: {
                      type: 'string',
                      minLength: 1,
                    },
                  },
                  required: ['degree', 'institution', 'location', 'date_range'],
                  additionalProperties: false,
                },
                minItems: 1,
              },
              cover_letter: {
                type: 'string',
                minLength: 1,
              },
            },
            required: [
              'name',
              'title',
              'contact',
              'summary',
              'skills',
              'experience',
              'education',
              'cover_letter',
            ],
            additionalProperties: false,
          },
        },
      },
    });

    // Get output text from response
    if (!response.output_text) {
      throw new Error('No output text received from OpenAI');
    }

    // Parse the JSON from the response (should be valid JSON due to schema)
    let resumeJson: ResumeData;
    try {
      resumeJson = JSON.parse(response.output_text);
    } catch (error) {
      throw new Error(
        `Failed to parse JSON from OpenAI response: ${error.message}. Response: ${response.output_text.substring(0, 200)}`,
      );
    }

    // Filter out empty skill arrays

    return {
      resumeJson,
      threadId: conversationId,
    };
  }

  /**
   * Parse questions from text and answer them in a single AI call
   * Extracts valid questions from text and answers them based on resume and job description
   * @param questionsText The raw text containing questions (may have formatting artifacts)
   * @param resumeJson The resume JSON
   * @param jobDescription The job description
   * @param customPrompt Optional custom prompt to use instead of default
   * @returns Array of {question: string, answer: string} objects
   */
  async parseAndAnswerQuestions(
    questionsText: string,
    resumeJson: Record<string, any>,
    jobDescription: string,
    customPrompt?: string,
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

    // Exclude cover_letter from resume to save tokens
    const resumeCopy: Record<string, any> = { ...(resumeJson || {}) };
    if (resumeCopy.cover_letter) {
      delete resumeCopy.cover_letter;
    }

    // Use compact JSON stringify (no pretty printing) to save tokens
    const compactResumeJson = JSON.stringify(resumeCopy);

    // Include JD and filtered resume inside the instructions to keep the API input minimal
    const fullInstructions = `${cleanedInstructions} Job Description: ${cleanedJobDescription} Resume Information: ${compactResumeJson}`;

    const response = await this.client.responses.create({
      model: 'gpt-5',
      instructions: fullInstructions,
      input: cleanedQuestionsText,
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

    try {
      // Parse the JSON from the response (should be valid JSON due to schema)
      const parsed = JSON.parse(response.output_text)['questions_and_answers'];
      if (Array.isArray(parsed)) {
        // Filter and clean the results
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
        `Failed to parse JSON from OpenAI response: ${error.message}. Response: ${response.output_text.substring(0, 200)}`,
      );
    }
  }
}
