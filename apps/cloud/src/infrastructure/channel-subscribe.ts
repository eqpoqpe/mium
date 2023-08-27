// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import Application from "koa";
import { EventEmitter } from "events";

type SubscribeCallback = () => void;

interface IChannel {
  subscribe(listener: SubscribeCallback): void;
  unsubscribe(listener: SubscribeCallback): void;
  publish(): void;
}

interface ISubscribe {
  channel: IChannel;
}

function channelSubscribe(app: Application) {
  const publish = new EventEmitter();
  const _usekey = "channel";
  const channel: IChannel = {
    subscribe(listener: SubscribeCallback) {
      publish.on("publish", listener);
    },
    unsubscribe(listener: SubscribeCallback) {
      publish.off("publish", listener);
    },
    publish() {
      publish.emit("publish");
    }
  };

  app.context[_usekey] = channel;
}

export {
  channelSubscribe,
  type ISubscribe
};