import { NextFunction, Request, Response } from "express";

async function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  next();
}

export default errorHandler;