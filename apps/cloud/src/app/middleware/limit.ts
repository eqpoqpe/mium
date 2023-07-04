import { NextFunction, Request, Response } from "express";
import { randomInt } from "node:crypto";

async function limit(req: Request, res: Response, next: NextFunction) {
  // const curr = randomInt(10);

  // if (curr % 2) {
  //   res.json({ error: "limited" });
  // } else {
  //   next();
  // }

  next();
}

export default limit;