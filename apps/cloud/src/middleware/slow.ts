// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { Context, Next } from "koa";

function slow(delay: number, _matches?: string[]) {
  return async function (_ctx: Context, next: Next) {
    await new Promise(resolve => setTimeout(resolve, delay));
    await next();
  }
}

export default slow;