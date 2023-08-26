// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { Context, Next } from "koa";

function cursorHeader(headerFields?: string[]) {
  return async function (ctx: Context, next: Next) {
    ctx.set("X-Mium-Number", "2333");

    await next();
  }
}

export default cursorHeader;