import { Context, Next } from "koa";

function cursorHeader(headerFields?: string[]) {
  return async function (ctx: Context, next: Next) {
    ctx.set("X-Mium-Number", "2333");

    await next();
  }
}

export default cursorHeader;