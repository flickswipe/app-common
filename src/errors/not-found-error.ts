import { CustomError } from "./custom-error";
import { NOT_FOUND_ERROR } from "../config";

interface NotFoundPayload {
  message: string;
}

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super(NOT_FOUND_ERROR);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): NotFoundPayload[] {
    return [{ message: NOT_FOUND_ERROR } as NotFoundPayload];
  }
}
