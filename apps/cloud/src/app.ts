// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import Koa from "koa";
import { bodyParser } from "@koa/bodyparser";
import cors from "@koa/cors";
import { cursorHeader, applicationException } from "./middleware";
import { makeTracingLayer } from "./layer";
import Router from "@koa/router";
import { ApplicationConfig } from "./types";
import { cacheProvider } from "./infrastructure/cache-provider";
import { channelSubscribe } from "./infrastructure/channel-subscribe";
import { configProvider } from "./infrastructure/config-provider";

function App(config: ApplicationConfig) {
  const app = new Koa({ proxy: true });
  const router = new Router({ prefix: config?.prefix });

  cacheProvider(app, config.cache);
  channelSubscribe(app);
  configProvider(app, config);
  app.use(applicationException());
  app.use(bodyParser());
  app.use(cors());
  app.use(cursorHeader());
  app.use(makeTracingLayer(router));

  return app;
}

export default App;