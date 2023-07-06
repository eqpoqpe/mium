import { Context, Next } from "koa";
import { randomInt } from "crypto";

function limit() {
  return async function (ctx: Context, next: Next) {
    const authOverNumber = randomInt(1000);

    ctx.response.set("X-Auth-Over", authOverNumber.toString());
    ctx.response.set("X-Powered-By", "koa");

    return next();
  }
}

export default limit;