import Router from "@koa/router";
import { search } from "../service";
import { ServerResult } from "../../types";
import { Prisma } from "@prisma/client";

const authRouter = new Router();

authRouter.post("/", async (ctx) => {
  const id = ctx.request?.body.unique ?? "";
  var result: ServerResult<Prisma.UserCreateInput | {}> = { error: "block" };
  var searchResult;

  try {
    searchResult = await search(id);
  } catch (error) {
    result.error = "block";
  }

  if (!!searchResult) {
    result.data = searchResult;
  }

  ctx.body = result;
});

export default authRouter;