// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import type Application from "koa";
import NodeCache, { type Options } from "node-cache";

interface ICacheProvider {
  cache: NodeCache;
}

function cacheProvider(app: Application, options?: Options) {
  const cacheProvider = new NodeCache(options);
  const _usekey = "cache";

  app.context[_usekey] = cacheProvider;
}

export {
  cacheProvider,
  type ICacheProvider
};