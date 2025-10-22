// signup/ login rules

import { z } from 'zod';

export const signUpSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
    displayName: z.string().min(1).max(50)
  })
});

export const signInSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8)
  })
});
