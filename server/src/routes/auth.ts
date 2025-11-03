import { Router, Request, Response } from 'express';
import { validate } from '../middlewares/validate.js';
import { signInSchema, signUpSchema } from '../schemas/auth.js';
import { createUser, issueTokens, verifyUser } from '../services/auth.js';

const router = Router();

// POST /v1/auth/signup
router.post('/signup', validate(signUpSchema), async (req: Request, res: Response) => {
  const { email, password, displayName } = req.body;

  try {
    const user = await createUser(email, password, displayName);
    const tokens = issueTokens({ _id: user._id.toString() });

    return res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        displayName: user.displayName
      },
      ...tokens
    });
  } catch (e: any) {
    if (e.status === 409) {
      return res.status(409).json({
        error: {
          code: 'EMAIL_EXISTS',
          message: 'Email already used'
        }
      });
    }

    return res.status(500).json({
      error: {
        code: 'SIGNUP_FAILED',
        message: 'Something went wrong during signup'
      }
    });
  }
});

// POST /v1/auth/signin
router.post('/signin', validate(signInSchema), async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await verifyUser(email, password);
  if (!user) {
    return res.status(401).json({
      error: {
        code: 'INVALID_CREDENTIALS',
        message: 'Wrong email or password'
      }
    });
  }

  const tokens = issueTokens({ _id: user._id.toString() });

  return res.json({
    user: {
      id: user.id,
      email: user.email,
      displayName: user.displayName
    },
    ...tokens
  });
});

export default router;
