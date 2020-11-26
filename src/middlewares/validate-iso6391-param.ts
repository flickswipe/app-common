import { param, ValidationChain } from "express-validator";

export const validateObjectIdParam = (field: string): ValidationChain =>
  param(field)
    .custom((value: string) => value.match(/[a-z]{2}/) != null)
    .withMessage(`must be valid language code`);
