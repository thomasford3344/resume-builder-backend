import { z } from 'zod';

export const createResumeSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  roleType: z.string().min(1, 'Role type is required'),
  jsonContent: z
    .string()
    .min(1, 'Role type is required')
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

export type CreateResumeDto = z.infer<typeof createResumeSchema>;
