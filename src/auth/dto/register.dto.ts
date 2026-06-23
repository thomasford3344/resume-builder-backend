import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Valid email is required'),
  name: z.string().min(1, 'Name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type RegisterDto = z.infer<typeof registerSchema>;
