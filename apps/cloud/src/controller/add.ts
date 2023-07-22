import { Context, Next } from "koa";

async function indexController(ctx: Context, next: Next) {
  ctx.body = "2333";
}

export {
  indexController
};