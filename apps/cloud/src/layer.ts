import Router from "@koa/router";
import { authRotuer } from "./api/auth";

function makeTracingLayer(router: Router) {
  router.use("/auth", authRotuer.routes(), authRotuer.allowedMethods());

  return router.routes();
}

export {
  makeTracingLayer
};