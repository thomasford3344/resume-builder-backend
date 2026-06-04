import { z } from 'zod';

export const bulkDeleteResumeSchema = z.object({
  ids: z.array(z.string()).min(1, 'At least one resume ID is required'),
});

export type BulkDeleteResumeDto = z.infer<typeof bulkDeleteResumeSchema>;
