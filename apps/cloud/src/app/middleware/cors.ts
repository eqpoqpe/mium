import { Context, Next } from "koa";

function CORS() {
  return async function (ctx: Context, next: Next) {
    ctx.response.set("Access-Control-Allow-Origin", "*");
    ctx.response.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    ctx.response.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return next();
  }
}

export default CORS;