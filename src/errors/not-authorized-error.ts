import { CustomError } from "./custom-error";
import { NOT_AUTHORIZED_ERROR } from "../config";

interface NotAuthorizedPayload {
  message: string;
}

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super(NOT_AUTHORIZED_ERROR);

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors(): NotAuthorizedPayload[] {
    return [{ message: NOT_AUTHORIZED_ERROR } as NotAuthorizedPayload];
  }
}
