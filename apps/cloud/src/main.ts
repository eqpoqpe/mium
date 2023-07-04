import express from "express";
import cookieParser from "cookie-parser";
import {
  errorHandler,
  limit,
  cursorHeader,
  CORS
} from "./app/middleware";
import { register } from "./register";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());
app.use(express.text());
app.use(cookieParser());
app.use(errorHandler);
app.use(CORS);
app.use(cursorHeader);
app.use(limit);
register(app);

const _ = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
);