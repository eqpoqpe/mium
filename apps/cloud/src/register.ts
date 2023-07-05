import Koa from "koa";
import Router from "@koa/router";
import { addRouter } from "./app/router";

function register(app: Koa) {
  // set basepath if need
  // app router
  const appRouter = new Router({ prefix: "/mium" });

  appRouter.use("/add",
    addRouter.routes(),
    addRouter.allowedMethods()
  );
  app.use(appRouter.routes());
}

export { register };