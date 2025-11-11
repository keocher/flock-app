// comment creating rules

import { z } from "zod";

export const createCommentSchema = z.object({
  body: z.object({
    postId: z.string().uuid(),
    body: z.string().min(1).max(2000),
  }),
});
