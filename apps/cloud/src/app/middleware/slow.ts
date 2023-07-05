import { Context, Next } from "koa";

function slow() {
  return async function (ctx: Context, next: Next) {
    await new Promise(resolve => setTimeout(resolve, 6000));

    return next();
  }
}

export default slow;