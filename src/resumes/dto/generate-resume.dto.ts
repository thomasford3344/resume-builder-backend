import { z } from 'zod';

export const generateResumeSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  roleType: z.string().min(1, 'Role type is required'),
  jobDescription: z.string().min(1, 'Job description is required'),
  industry: z.string().min(1, 'Industry is required'),
});

export type GenerateResumeDto = z.infer<typeof generateResumeSchema>;

