import Router from "@koa/router";
import { authRotuer } from "./api/auth";

function makeTracingLayer() {
  const router = new Router({ prefix: "/api" });

  router.use("/auth", authRotuer.routes(), authRotuer.allowedMethods());

  return router.routes();
}

export {
  makeTracingLayer
};