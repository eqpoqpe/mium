// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { type Options as NodeCacheOPtions } from "node-cache";

type AccessCode = "limit" | "block" | "full";

interface ResquestDetailedError {
  code: AccessCode;
  msg?: string;
}

// @ts-ignore
// new defined types for next version
interface _ServerResult<T> {
  error: ResquestDetailedError;
  api: string;
  data?: T;
}

interface ServerResult<T> {
  error: AccessCode;
  data?: T;
}

type ApplicationConfig = {
  privoder?: string | boolean;
  prefix?: string;
  port?: number;
  cache?: NodeCacheOPtions;
};

export {
  type ServerResult,
  type ApplicationConfig
};