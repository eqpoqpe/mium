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

type ApplicationConfig = {};

export {
  type ServerResult,
  type ApplicationConfig
};