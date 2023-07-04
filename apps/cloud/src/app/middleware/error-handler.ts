import { NextFunction, Request, Response } from "express";

async function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  res.json({ error: "" });
}

export default errorHandler;