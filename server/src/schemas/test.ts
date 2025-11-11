import { Router } from "express";
import { createPostSchema } from "../schemas/post.js";
import { z } from "zod";

const router = Router();

router.post("/create", (req, res) => {
  const result = createPostSchema.safeParse({ body: req.body });

  if (!result.success) {
    return res.status(400).json({ error: result.error.format() });
  }

  // Simulate saving to DB
  const post = result.data.body;
  res.status(201).json({ success: true, post });
});

export default router;
