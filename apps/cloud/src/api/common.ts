import Router, { RouterContext } from "@koa/router";

async function healthz(ctx: RouterContext) {
  ctx.status = 200;
  ctx.body = "healthz ok";
}

const commonRouter = new Router()
  .get("healthz", healthz)

export {
  commonRouter
};