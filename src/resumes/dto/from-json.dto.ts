import { z } from 'zod';

export const fromJsonSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  roleType: z.string().min(1, 'Job title is required'),
  jobDescription: z.string().min(1, 'Job description is required'),
  aiModel: z.enum(['openai', 'claude']),
  aiVersion: z.string().min(1, 'AI model version is required'),
  jsonContent: z
    .string()
    .min(1, 'JSON content is required')
    .refine((val) => {
      try {
        JSON.parse(val);
        return true;
      } catch {
        return false;
      }
    }, 'Invalid JSON format')
    .transform((val) => JSON.parse(val)),
});

export type FromJsonDto = z.infer<typeof fromJsonSchema>;
