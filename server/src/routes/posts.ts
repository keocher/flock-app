//URLs the frontend will call.

import { Router, Request, Response } from "express";
import { requireAuth } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { createPostSchema, listPostsSchema } from "../schemas/post.js";
import { createPost, listPosts, getPost } from "../services/posts.js";
import { PostModel } from "../models/Post.js";

const router = Router();

//hoempage posts
router.get("/homepage", async (_req, res) => {
  try {
    const posts = await PostModel.find().sort({ date: -1 }).limit(10);
    res.json({ posts });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts", details: err });
  }
});

// GET /v1/posts?page=1&limit=20
router.get(
  "/",
  validate(listPostsSchema),
  async (req: Request, res: Response) => {
    const page = Number((req.query.page as string) || 1);
    const limit = Math.min(Number((req.query.limit as string) || 20), 100);
    const posts = await listPosts(page, limit);
    res.json({ data: posts, meta: { page, limit } });
  },
);

// GET /v1/posts/:id
router.get("/:id", async (req: Request, res: Response) => {
  const post = await getPost(req.params.id);
  if (!post)
    return res
      .status(404)
      .json({ error: { code: "NOT_FOUND", message: "Post not found" } });
  res.json({ data: post });
});

// POST /v1/posts
router.post(
  "/",
  requireAuth,
  validate(createPostSchema),
  async (req: Request, res: Response) => {
    const user = (req as any).user;
    const post = await createPost(user.id, req.body);
    res.status(201).json({ data: post });
  },
);

export default router;
