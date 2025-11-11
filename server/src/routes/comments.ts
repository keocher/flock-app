//URLs the frontend will call.

import { Router, Request, Response } from "express";
import { requireAuth } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { createCommentSchema } from "../schemas/comment.js";
import { createComment, listCommentsForPost } from "../services/comments.js";
import { getPost } from "../services/posts.js";

const router = Router();

// GET /v1/comments?postId=...
router.get("/", async (req: Request, res: Response) => {
  const postId = (req.query.postId as string) || "";
  if (!postId)
    return res
      .status(400)
      .json({ error: { code: "BAD_REQUEST", message: "postId is required" } });
  const post = await getPost(postId);
  if (!post)
    return res
      .status(404)
      .json({ error: { code: "NOT_FOUND", message: "Post not found" } });
  const items = await listCommentsForPost(postId);
  res.json({ data: items });
});

// POST /v1/comments
router.post(
  "/",
  requireAuth,
  validate(createCommentSchema),
  async (req: Request, res: Response) => {
    const user = (req as any).user;
    const { postId, body } = req.body as any;
    const post = await getPost(postId);
    if (!post)
      return res
        .status(404)
        .json({ error: { code: "NOT_FOUND", message: "Post not found" } });
    const comment = await createComment(user.id, postId, body);
    res.status(201).json({ data: comment });
  },
);

export default router;
