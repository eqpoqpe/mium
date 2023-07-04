import { NextFunction, Request, Response } from "express";

async function cursorHeader(req: Request, res: Response, next: NextFunction) {
  res.removeHeader("X-Powered-By");

  next();
}

export default cursorHeader;