// checks for a valid JWT token in the Authorization header

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config.js';
import { AuthUser } from '../types.js';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization; // Bearer <token>
  if (!header) return res.status(401).json({ error: { code: 'UNAUTHENTICATED', message: 'Missing token' } });
  const [, token] = header.split(' ');
  try {
    const payload = jwt.verify(token, config.jwtSecret) as AuthUser;
    (req as any).user = payload;
    next();
  } catch {
    return res.status(401).json({ error: { code: 'UNAUTHENTICATED', message: 'Invalid token' } });
  }
}
