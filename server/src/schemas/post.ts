// Post creation and list queries.

import { z } from 'zod';

export const listPostsSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional()
  })
});

export const createPostSchema = z.object({
  body: z.object({
    title: z.string().min(1).max(200),
    body: z.string().min(1).max(5000),
    communityId: z.string().uuid().optional(),
    visibility: z.enum(['public', 'course', 'private']).default('public')
  })
});
