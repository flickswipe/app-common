import { MongoNetworkError } from "mongodb";

export const mongodbCatch = (err: Error): void => {
  if (process.env.NODE_ENV === "test") {
    if (err instanceof MongoNetworkError) {
      return;
    }
  }

  throw err;
};
