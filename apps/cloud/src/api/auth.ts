import Router from "@koa/router";
import { type Context } from "koa";
import { VerificationPayload } from "@mium/types";
import { isValidEmail } from "../util";
import { isAlphaNumeric } from "@mium/utils";

interface ILoginPayload extends VerificationPayload { }

async function createAccessToken() {
}

async function uniqueVerification(ctx: Context) {

  // provider code or email
  const { unique_key } = (ctx.request.body as ILoginPayload);

  if (isValidEmail(unique_key)) {

    // email verification
    ctx.body = "email";
  } else if (isAlphaNumeric(unique_key)) {

    // provider code verification
    ctx.body = "provider code"
  } else {
    ctx.body = "valid";
  }
}

const authRotuer = new Router()
  .post("/verification", uniqueVerification)
  .post("/create_access_token", createAccessToken);

export {
  authRotuer
};