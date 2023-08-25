// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { Context, Next } from "koa";
import NodeCache, { type Options } from "node-cache";

interface ICacheProvider {
  cache: NodeCache;
}

function cacheProvider(options?: Options) {
  const cacheProvider = new NodeCache(options);

  return async function (ctx: Context, next: Next) {
    ctx.cache = cacheProvider;

    return await next();
  };
}

export {
  cacheProvider,
  type ICacheProvider
};