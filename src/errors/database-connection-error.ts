import { CustomError } from "./custom-error";
import { DATABASE_CONNECTION_ERROR } from "../config";

interface DatabaseConnectionPayload {
  message: string;
}

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = DATABASE_CONNECTION_ERROR;

  constructor() {
    super(DATABASE_CONNECTION_ERROR);

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors(): DatabaseConnectionPayload[] {
    return [{ message: this.reason } as DatabaseConnectionPayload];
  }
}
