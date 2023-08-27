// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import Router, { RouterContext } from "@koa/router";

async function healthz(ctx: RouterContext) {
  ctx.status = 200;
  ctx.body = "healthz ok";
}

async function layout(ctx: RouterContext) {
  ctx.status = 200;
  ctx.body = "layout";
}

const commonRouter = new Router()
  .get("healthz", healthz)
  .get("layout", layout)

export {
  commonRouter
};