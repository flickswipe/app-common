import { param, ValidationChain } from "express-validator";
import { Types } from "mongoose";

export const validateObjectIdParam = (field: string): ValidationChain =>
  param(field)
    .custom((value: any) => Types.ObjectId.isValid(value))
    .withMessage(`must be valid id`);
