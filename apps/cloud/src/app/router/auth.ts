import Router from "@koa/router";
import { createUser, search } from "../service";
import { ServerResult } from "../../types";
import { User } from "@prisma/client";
import { performAction } from "../service/action";
import { CreateUserPayload } from "@mium/types";
import { authLimit } from "../util/limit";
import { Context, Next } from "koa";
import { CreateUserPayloadErrors } from "@mium/types";

const authRouter = new Router();

function passwordMiddle() {
  return async function (ctx: Context, next: Next) {
    const { password } = ctx.request.body;
    const serveResult: ServerResult<unknown> = {
      error: CreateUserPayloadErrors.PASSWORD
    };

    if (authLimit.password(password)) {
      return next();
    } else {
      ctx.body = serveResult;
    }
  }
}

function emailMiddle() {
  return async function (ctx: Context, next: Next) {
    const { email } = ctx.request.body;
    const serveResult: ServerResult<unknown> = {
      error: CreateUserPayloadErrors.EMAIL
    };

    if (authLimit.email(email)) {
      return next();
    } else {
      ctx.body = serveResult;
    }
  }
}

function registryActionMiddle() {
  return async function (ctx: Context, next: Next) {
    const { password, email } = (ctx.request.body as CreateUserPayload);
    var result: ServerResult<User | {}> = { error: "block" };
    const actionResult = await performAction<User>(async () => {
      return await createUser(password, email);
    });

    if (!!actionResult.result) {
      ctx.body = "registry done";
    }

    ctx.body = actionResult;
  }
}

authRouter.post("/registry",
  passwordMiddle(),
  emailMiddle(),

  // all ready to handle `registry`
  registryActionMiddle()
);

export default authRouter;