import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from '../config.js';
import { UserModel } from '../models/User.js';

export async function createUser(email: string, password: string, displayName: string) {
  const existing = await UserModel.findOne({ email });
  if (existing) throw Object.assign(new Error('Email exists'), { status: 409 });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await UserModel.create({ email, password: passwordHash, displayName });
  return user;
}

export async function verifyUser(email: string, password: string) {
  const user = await UserModel.findOne({ email });
  if (!user) return null;

  const ok = await bcrypt.compare(password, user.password);
  return ok ? user : null;
}

export function issueTokens(user: any) {
  const accessToken = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '7d' });
  return { accessToken, refreshToken };
}
