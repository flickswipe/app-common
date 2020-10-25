import { CustomError } from "./custom-error";
import { TOO_MANY_REQUESTS_ERROR } from "../config";

interface TooManyRequestsPayload {
  message: string;
}

export class TooManyRequestsError extends CustomError {
  statusCode = 429;

  constructor() {
    super(TOO_MANY_REQUESTS_ERROR);

    Object.setPrototypeOf(this, TooManyRequestsError.prototype);
  }

  serializeErrors(): TooManyRequestsPayload[] {
    return [{ message: TOO_MANY_REQUESTS_ERROR } as TooManyRequestsPayload];
  }
}
