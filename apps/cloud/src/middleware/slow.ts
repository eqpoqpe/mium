import { Context, Next } from "koa";

function slow(delay: number, matches?: string[]) {
  return async function (ctx: Context, next: Next) {
    await new Promise(resolve => setTimeout(resolve, delay));
    await next();
  }
}

export default slow;