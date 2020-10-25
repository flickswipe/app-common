import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";
import { GENERIC_ERROR } from "../config";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction // must be present so express recognizes error handler
): any => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err);

  res.status(400).send({
    errors: [{ message: GENERIC_ERROR }],
  });
};
