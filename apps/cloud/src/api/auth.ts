import Router from "@koa/router";
import { Context } from "koa";

const authRotuer = new Router();

async function login(ctx: Context) {
  ctx.body = "login ok";
}

authRotuer.get("/login", login);

export {
  authRotuer
};