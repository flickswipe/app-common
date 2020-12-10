import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email?: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.session?.jwt) {
    console.log(`no jwt detected`);
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;

    req.currentUser = payload;
    console.log(`jwt detected for`, payload);
  } catch (err) {
    delete req.currentUser;
    console.error("Failed to extract current user from JWT");
  }

  next();
};
