import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./app/router/auth";
import searchRotuer from "./app/router/search";
import errorHandler from "./app/middleware/error-handler";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);
app.use("/user", authRouter);
app.use("/search", searchRotuer);

const _ = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
);