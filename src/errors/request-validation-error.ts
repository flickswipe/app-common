import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";
import { REQUEST_VALIDATION_ERROR } from "../config";

interface RequestValidationPayload {
  message: string;
  field: string;
}

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super(REQUEST_VALIDATION_ERROR);

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors(): RequestValidationPayload[] {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param } as RequestValidationPayload;
    });
  }
}
