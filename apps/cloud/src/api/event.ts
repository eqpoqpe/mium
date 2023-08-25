import Router from "@koa/router";
import { Context } from "koa";
import { SSEStream } from "../infrastructure/sse-stream";

async function eventSubscribe(ctx: Context) {
  ctx.request.socket.setTimeout(0);
  ctx.req.socket.setNoDelay(true);
  ctx.req.socket.setKeepAlive(true);

  ctx.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
  });

  const stream = new SSEStream();

  ctx.status = 200;
  ctx.body = stream;
  const date = Date.now();

  const listener = () => {
    stream.write(`data: ${JSON.stringify({ _update: Date.now() })}\n\n`);
    console.log(date);
  };

  ctx.subscribe?.(listener);

  stream.on("close", () => {
    ctx.unsubscribe?.(listener);
  });
}

const eventRouter = new Router()
  .post("/subscribe", eventSubscribe)

export {
  eventRouter
};