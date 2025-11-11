//catches all unhandled errors and sends a generic error response

import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(err);
  if (res.headersSent) return;
  res
    .status(500)
    .json({ error: { code: "INTERNAL", message: "Something went wrong" } });
}
