import { Express } from "express";
import {
  authRouter,
  searchRotuer,
  addRotuer,
  courseRouter
} from "./app/router";

function register(app: Express) {
  app.use("/auth", authRouter);
  app.use("/search", searchRotuer);
  app.use("/add", addRotuer);
  app.use("/course", courseRouter);
}

export { register };