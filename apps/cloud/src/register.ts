import Koa from "koa";
import Router from "@koa/router";
import { addRouter, authRouter } from "./app/router";

function register(app: Koa) {

  // set basepath if need
  // app router
  const appRouter = new Router({ prefix: "/api" });

  appRouter.use("/add",
    addRouter.routes(),
    addRouter.allowedMethods()
  );
  appRouter.use("/auth",
    authRouter.routes(),
    authRouter.allowedMethods()
  );
  app.use(appRouter.routes());
}

export { register };