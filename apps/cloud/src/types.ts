import { CreateUserPayloadErrors } from "@mium/types";

type AccessCode = "limit" | "block";

interface ServerResult<T> {
  error: AccessCode | CreateUserPayloadErrors;
  data?: T;
}

export {
  type ServerResult
};