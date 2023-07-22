import Router from "@koa/router";
import { createUser } from "../service";
import { ServerResult } from "../types";
import { User } from "@prisma/client";
import { performAction } from "../service/action";
import { CreateUserPayload } from "@mium/types";
import { authLimit } from "../util/limit";
import { Context, Next } from "koa";
import { CreateUserPayloadErrors } from "@mium/types";

const authRouter = new Router();

function passwordMiddleware() {
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

function emailMiddleware() {
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

function registryActionMiddleware() {
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
  passwordMiddleware(),
  emailMiddleware(),

  // all ready to handle `registry`
  registryActionMiddleware()
);

authRouter.get("/exp", async (ctx, next) => {
  ctx.status = 200;
  ctx.body = "2333";
});

export default authRouter;