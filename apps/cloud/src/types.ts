type AccessCode = "limit" | "block";

interface ServerResult<T> {
  error: AccessCode;
  data?: T;
}

export {
  type ServerResult
};