import express from "express";
import cookieParser from "cookie-parser";
import {
  authRouter,
  searchRotuer,
  addRotuer,
  courseRouter
} from "./app/router";
import { errorHandler, limit } from "./app/middleware";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);
app.use(limit);
app.use("/user", authRouter);
app.use("/search", searchRotuer);
app.use("/add", addRotuer);
app.use("/course", courseRouter);

const _ = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
);