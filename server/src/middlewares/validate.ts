// Middleware to validate request data using Zod schemas

import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = schema.parse({ body: req.body, query: req.query, params: req.params });
    req.body = (data as any).body ?? req.body;
    req.query = (data as any).query ?? req.query;
    req.params = (data as any).params ?? req.params;
    next();
  } catch (err: any) {
    return res
      .status(422)
      .json({ error: { code: 'VALIDATION_ERROR', message: 'Invalid input', details: err.errors } });
  }
};
