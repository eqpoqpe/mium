import Koa from "koa";
import { bodyParser } from "@koa/bodyparser";
import cors from "@koa/cors";
import { cursorHeader, errorHandler } from "./middleware";
import { makeTracingLayer } from "./layer";

const app = new Koa({ proxy: true });

app.use(errorHandler());
app.use(bodyParser());
app.use(cors());
app.use(cursorHeader());
app.use(makeTracingLayer());

export default app;