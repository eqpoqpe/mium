import { Context, Next } from "koa";

function cursorHeader(headerFields: string[]) {
  return async function (ctx: Context, next: Next) {
    headerFields.map((field) => {
      ctx.response.remove(field);
    })

    return next();
  }
}

export default cursorHeader;