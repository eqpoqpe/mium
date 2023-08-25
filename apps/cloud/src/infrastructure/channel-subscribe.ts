// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { Context, Next } from "koa";
import { EventEmitter } from "events";

type SubscribeCallback = () => void;

function channelSubscribe() {
  const subscribers: SubscribeCallback[] = [];
  const publish = new EventEmitter();

  return async function (ctx: Context, next: Next) {
    ctx.subscribe = (listener: SubscribeCallback) => {
      publish.on("publish", listener);
    };

    ctx.unsubscribe = (listener: SubscribeCallback) => {
      publish.off("publish", listener);
    };

    ctx.publish = () => {
      publish.emit("publish");
    };

    return await next();
  }
}

export {
  channelSubscribe
};