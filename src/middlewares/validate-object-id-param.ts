import { param } from "express-validator";
import { Types } from "mongoose";

export const validateObjectIdParam = param("id")
  .custom((value: any) => Types.ObjectId.isValid(value))
  .withMessage(`must be valid id`);
