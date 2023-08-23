import Router from "@koa/router";
import { Context } from "koa";
import { VerificationPayload } from "@mium/types";

async function login(ctx: Context) {
  ctx.body = "login ok";
}

async function uniqueVerification(ctx: Context) {

  // provider code or email
  const { provided_value } = (ctx.request.body as VerificationPayload);

  console.log("verification");

  if (typeof provided_value !== "undefined") {
    ctx.body = "verification ok";
  } else {
    ctx.body = "verification error";
  }
}

const authRotuer = new Router()
  .post("/login", login)
  .post("/verification", uniqueVerification)

export {
  authRotuer
};