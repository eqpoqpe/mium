// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import Router, { RouterContext } from "@koa/router";
import { ICacheProvider } from "../infrastructure/cache-provider";
import { ISubscribe } from "../infrastructure/channel-subscribe";
import { blobService } from "../application/blob_service";

async function createBlob(ctx: RouterContext<{}, ISubscribe & ICacheProvider>) {
  ctx.channel.publish();
  await blobService();
}

const blobRouter = new Router()
  .post("/create_blob", createBlob)

export {
  blobRouter
};