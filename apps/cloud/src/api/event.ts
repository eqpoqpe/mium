import Router from "@koa/router";
import { SSEStream } from "../infrastructure/sse-stream";
import { ISubscribe } from "../infrastructure/channel-subscribe";

const eventRouter = new Router()
  .post<{}, ISubscribe>("/subscribe", async (ctx) => {
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

    ctx.channel.subscribe(listener);

    stream.on("close", () => {
      ctx.unsubscribe?.(listener);
    });
  })

export {
  eventRouter
};