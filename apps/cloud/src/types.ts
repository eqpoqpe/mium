type AccessCode = "limit" | "block";

interface ServerResult {
  error: AccessCode;
}

export {
  type ServerResult
};