import Router from "@koa/router";

async function healthz() {
}

const commonRouter = new Router()
  .get("healthz", healthz)

export {
  commonRouter
};