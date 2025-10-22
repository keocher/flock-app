// starts the Express server with middleware, routes, and error handling

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { config } from './config.js';
import { errorHandler } from './middlewares/error.js';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import commentRoutes from './routes/comments.js';

export function startServer() {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json({ limit: '2mb' }));
  app.use(morgan('dev'));
  app.use(rateLimit({ windowMs: 60_000, max: 100 }));

  app.get('/v1/health', (_req, res) => res.json({ ok: true }));

  app.use('/v1/auth', authRoutes);
  app.use('/v1/posts', postRoutes);
  app.use('/v1/comments', commentRoutes);

  app.use(errorHandler);

  app.listen(config.port, () => {
    console.log(`API listening on http://localhost:${config.port}`);
  });
}
