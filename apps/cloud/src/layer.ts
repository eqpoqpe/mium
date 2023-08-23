// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import Router from "@koa/router";
import { authRotuer } from "./api/auth";
import { blobRouter } from "./api/blob";

function makeTracingLayer(router: Router) {
  router.use("/auth", authRotuer.routes(), authRotuer.allowedMethods());
  router.use("/blob", blobRouter.routes(), blobRouter.allowedMethods());

  return router.routes();
}

export {
  makeTracingLayer
};