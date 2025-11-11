import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { config } from "../config.js";
import { UserModel } from "../models/User.js";

/**
 * Creates a new user with hashed password.
 * Throws 409 if email already exists.
 */
export async function createUser(
  email: string,
  password: string,
  displayName: string,
) {
  const existing = await UserModel.findOne({ email });
  if (existing) {
    throw Object.assign(new Error("Email exists"), { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await UserModel.create({
    email,
    password: passwordHash,
    displayName,
  });

  return user;
}

/**
 * Verifies user credentials.
 * Returns user if password matches, otherwise null.
 */
export async function verifyUser(email: string, password: string) {
  console.log("Signin attempt:", email);

  const user = await UserModel.findOne({ email });
  console.log("User found:", !!user);

  if (!user) return null;

  console.log("Stored hash:", user.password);
  const isMatch = await bcrypt.compare(password, user.password);
  console.log("Password match:", isMatch);

  return isMatch ? user : null;
}

/**
 * Issues access and refresh tokens for a user.
 */
export function issueTokens(user: { _id: string }) {
  const accessToken = jwt.sign({ id: user._id }, config.jwtSecret, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ id: user._id }, config.jwtSecret, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
}
