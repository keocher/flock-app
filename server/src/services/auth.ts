// Handles signup, login, password hashing, and token generation.

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from '../config.js';
import { Role } from '../types.js';

// ---- In-memory user store (replace with real DB later) ----
export type User = { id: string; email: string; passwordHash: string; displayName: string; role: Role };
const users: Record<string, User> = {};

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export async function createUser(email: string, password: string, displayName: string, role: Role = 'student') {
  // unique email check
  const exists = Object.values(users).find(u => u.email.toLowerCase() === email.toLowerCase());
  if (exists) throw Object.assign(new Error('Email exists'), { status: 409 });

  const id = uuid();
  const passwordHash = await bcrypt.hash(password, 10);
  const user: User = { id, email, passwordHash, displayName, role };
  users[id] = user;
  return user;
}

export async function verifyUser(email: string, password: string) {
  const user = Object.values(users).find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return null;
  const ok = await bcrypt.compare(password, user.passwordHash);
  return ok ? user : null;
}

export function issueTokens(user: User) {
  const accessToken = jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: '7d' });
  return { accessToken, refreshToken };
}
