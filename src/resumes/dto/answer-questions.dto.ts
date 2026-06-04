import { z } from 'zod';

export const answerQuestionsSchema = z.object({
  resumeId: z.string().min(1, 'Resume ID is required'),
  questions: z.string().min(1, 'Questions text is required'),
});

export type AnswerQuestionsDto = z.infer<typeof answerQuestionsSchema>;
