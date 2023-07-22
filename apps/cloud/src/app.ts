import { register } from "./register";
import Koa from "koa";
import { bodyParser } from "@koa/bodyparser";
import {
  CORS,
  cursorHeader,
  errorHandler,
  limit
} from "./middleware";

const app = new Koa();

app.use(errorHandler());
app.use(bodyParser());
app.use(CORS());
app.use(limit());
app.use(cursorHeader(["X-Powered-By"]));
register(app);

export default app;