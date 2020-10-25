import { CustomError } from "./custom-error";
import { BAD_REQUEST_ERROR } from "../config";

interface BadRequestPayload {
  message: string;
}

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message || BAD_REQUEST_ERROR);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors(): BadRequestPayload[] {
    return [
      { message: this.message || BAD_REQUEST_ERROR } as BadRequestPayload,
    ];
  }
}
