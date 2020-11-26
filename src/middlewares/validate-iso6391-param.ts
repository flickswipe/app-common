import { param } from "express-validator";

export const validateObjectIdParam = param("iso6319")
  .custom((value: string) => value.match(/[a-z]{2}/) != null)
  .withMessage(`must be valid language code`);
