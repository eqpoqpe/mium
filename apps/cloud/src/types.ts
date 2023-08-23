// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { CreateUserPayloadErrors } from "@mium/types";

type AccessCode = "limit" | "block" | "full";

interface ResquestDetailedError {
  code: AccessCode | CreateUserPayloadErrors;
  msg?: string;
}

// new defined types for next version
interface _ServerResult<T> {
  error: ResquestDetailedError;
  api: string;
  data?: T;
}

interface ServerResult<T> {
  error: AccessCode | CreateUserPayloadErrors;
  data?: T;
}

type ApplicationConfig = {
  privoder?: string | boolean;
  prefix?: string;
};

export {
  type ServerResult,
  type ApplicationConfig
};