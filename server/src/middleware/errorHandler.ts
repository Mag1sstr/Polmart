import { Request, Response, NextFunction } from "express";

// Simple centralized error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  // Basic logging for now
  // You can replace with a more advanced logger
  // eslint-disable-next-line no-console
  console.error(err);

  res.status(500).json({
    message: "Internal server error"
  });
};

