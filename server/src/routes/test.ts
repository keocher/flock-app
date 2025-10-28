import { Router } from 'express';
import { PostModel } from '../models/Post.js';

const router = Router();

router.get('/homepage', async (_req, res) => {
  try {
    const posts = await PostModel.find().sort({ date: -1 }).limit(10);
    res.json({ posts });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts', details: err });
  }
});

export default router;
