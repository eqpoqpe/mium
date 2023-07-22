import { Context, Next } from "koa";

function slow(delay: number) {
  return async function (ctx: Context, next: Next) {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return next();
  }
}

export default slow;