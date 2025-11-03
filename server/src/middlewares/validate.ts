import { ZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate = (schema: ZodObject<any>) => (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('Incoming body:', req.body); // ✅ Add this for debugging
    schema.parse(req.body); // ✅ Validate req.body directly
    next();
  } catch (err: any) {
    console.log('Validation error:', err.errors); // ✅ Log exact failure
    return res.status(422).json({
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Invalid input',
        details: err.errors
      }
    });
  }
};
