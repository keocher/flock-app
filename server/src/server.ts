import express from 'express';
import 'dotenv/config';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import connectDB from './connectDB.js'; // ✅ MongoDB connection
import { config } from './config.js';    // ✅ Config values
import { errorHandler } from './middlewares/error.js';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import commentRoutes from './routes/comments.js';
import testRoutes from './routes/test.js'; // ✅ Test route

export async function startServer() {
  try {
    await connectDB(); // ✅ Connect to MongoDB

    const app = express();
    app.use(helmet());
    app.use(cors({ origin: "http://localhost:3000", credentials: true }));
    app.use(express.json({ limit: '2mb' }));
    app.use(morgan('dev'));
    app.use(rateLimit({ windowMs: 60_000, max: 100 }));

    app.get('/v1/health', (_req, res) => res.json({ ok: true }));

    app.use('/v1/auth', authRoutes);
    app.use('/v1/posts', postRoutes);
    app.use('/v1/comments', commentRoutes);
    app.use('/v1/test', testRoutes); // ✅ Mount test route

    app.use(errorHandler);

    app.listen(config.port, () => {
      console.log(`🚀 API listening on http://localhost:${config.port}`);
    });
  } catch (err) {
    console.error('❌ Server startup failed:', err);
    process.exit(1);
  }
}
