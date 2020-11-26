import { param, ValidationChain } from "express-validator";

export const validateIso6391Param = (field: string): ValidationChain =>
  param(field)
    .custom((value: string) => value.match(/[a-z]{2}/) != null)
    .withMessage(`must be valid language code`);
