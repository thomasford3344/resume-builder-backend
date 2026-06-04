import { z } from 'zod';

export const filterResumeSchema = z.object({
  companyName: z.string().optional(),
  roleType: z.string().optional(),
  startDate: z
    .string()
    .optional()
    .refine(
      (val) => !val || !isNaN(Date.parse(val)),
      'Invalid start date format',
    )
    .transform((val) => (val ? new Date(val) : undefined)),
  endDate: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), 'Invalid end date format')
    .transform((val) => (val ? new Date(val) : undefined)),
});

export type FilterResumeDto = z.infer<typeof filterResumeSchema>;
