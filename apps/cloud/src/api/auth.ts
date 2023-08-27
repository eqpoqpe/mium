// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import Router, { RouterContext } from "@koa/router";
import { VerificationPayload } from "@mium/types";
import { isValidEmail, isValidProviderCode } from "../util";
import { isAlphaNumeric } from "@mium/utils";
import { ICacheProvider } from "../infrastructure/cache-provider";
import { IConfigProvider } from "../infrastructure/config-provider";

interface ILoginPayload extends VerificationPayload { }

async function verification(ctx: RouterContext<{}, ICacheProvider & IConfigProvider>) {
  
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
  .post("/verification", verification)
  .post("/create_access_token", async (ctx) => {
    ctx.body = "jwt";
  })

export {
  authRotuer
};