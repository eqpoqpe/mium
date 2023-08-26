import Router, { RouterContext } from "@koa/router";
import { VerificationPayload } from "@mium/types";
import { isValidEmail, isValidProviderCode } from "../util";
import { isAlphaNumeric } from "@mium/utils";
import { ISubscribe } from "../infrastructure/channel-subscribe";
import { ICacheProvider } from "../infrastructure/cache-provider";

interface ILoginPayload extends VerificationPayload { }

async function verification(ctx: RouterContext<{}, ICacheProvider>) {
  
  // provider code or email
  const { unique_key } = (ctx.request.body as ILoginPayload);

  if (isValidEmail(unique_key)) {

    // email verification
    ctx.body = "email";
  } else if (isAlphaNumeric(unique_key) && isValidProviderCode(unique_key)) {

    // provider code verification
    ctx.body = "provider code"
  } else {
    ctx.body = "valid";
  }
}

const authRotuer = new Router()
  .post<{}, ISubscribe & ICacheProvider>("/verification", verification)
  .post("/create_access_token", async (ctx) => {
    ctx.body = "jwt";
  })

export {
  authRotuer
};