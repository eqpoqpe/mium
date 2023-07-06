import Router from "@koa/router";
import { createUser, search } from "../service";
import { ServerResult } from "../../types";
import { Prisma } from "@prisma/client";
import { performAction } from "../service/action";

const authRouter = new Router();

authRouter.post("/", async (ctx) => {
  const id = ctx.request?.body.unique ?? "";

  const result = await performAction<ServerResult<Prisma.UserCreateInput | {}>>(async () => {
    return await search(id);
  });
  ctx.body = result;
});
authRouter.post("/registry", async (ctx, next) => {
  const result = await performAction<ServerResult<Prisma.UserCreateInput | {}>>(async () => {
    return await createUser();
  });

  ctx.body = result;
});

export default authRouter;