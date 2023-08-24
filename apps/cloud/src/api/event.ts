import Router from "@koa/router";
import { Context } from "koa";
import { PassThrough } from "stream";

async function eventSubscribe(ctx: Context) {
  ctx.request.socket.setTimeout(0);
  ctx.req.socket.setNoDelay(true);
  ctx.req.socket.setKeepAlive(true);

  ctx.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
  });

  const stream = new PassThrough();

  ctx.status = 200;
  ctx.body = stream;

  setInterval(() => {
    stream.write(`data: ${JSON.stringify({ _update: Date.now() })}\n\n`);
  }, 1300);

  ctx.res.on("close", () => {
    console.log("closed");
  });
}

const eventRouter = new Router()
  .post("/subscribe", eventSubscribe)

export {
  eventRouter
};