import Router from "@koa/router";
import { Context } from "koa";
import { ICacheProvider } from "../infrastructure/cache-provider";

async function createBlob(ctx: Context & ICacheProvider) {
  const blob = ctx.cache.get("blob");

  ctx.body = blob;
}

const blobRouter = new Router()
  .post("/create_blob", createBlob)

export {
  blobRouter
};