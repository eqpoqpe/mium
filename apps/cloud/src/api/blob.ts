import Router, { RouterContext } from "@koa/router";
import { ICacheProvider } from "../infrastructure/cache-provider";
import { ISubscribe } from "../infrastructure/channel-subscribe";

async function createBlob(ctx: RouterContext<{}, ISubscribe & ICacheProvider>) {
  ctx.channel.publish();
}

const blobRouter = new Router()
  .post("/create_blob", createBlob)

export {
  blobRouter
};