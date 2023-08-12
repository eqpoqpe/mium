import Koa from "koa";
import { bodyParser } from "@koa/bodyparser";
import cors from "@koa/cors";
import { cursorHeader, errorHandler } from "./middleware";
import { makeTracingLayer } from "./layer";
import Router from "@koa/router";

async function App() {
  const config = (await import("./config")).default;
  const app = new Koa({ proxy: true });
  const router = new Router({ prefix: config?.prefix });

  app.use(errorHandler());
  app.use(bodyParser());
  app.use(cors());
  app.use(cursorHeader());
  app.use(makeTracingLayer(router));

  return app;
}

export default App;