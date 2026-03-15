import { Request, Response, NextFunction } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // eslint-disable-next-line no-console
  console.error(err);

  res.status(500).json({
    message: "Internal server error",
  });
};
