// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import Router from "@koa/router";
import { authRotuer } from "./api/auth";
import { blobRouter } from "./api/blob";
import { eventRouter } from "./api/event";

function makeTracingLayer(router: Router) {
  router.use("/auth", authRotuer.routes(), authRotuer.allowedMethods());
  router.use("/blob", blobRouter.routes(), blobRouter.allowedMethods());
  router.use("/event", eventRouter.routes(), eventRouter.allowedMethods());

  return router.routes();
}

export {
  makeTracingLayer
};