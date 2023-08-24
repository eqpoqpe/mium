interface CreateUserPayload {
  
  // 8 characters
  password: string;
  email: string;
}

// uniqueVerification
interface VerificationPayload {
  unique_key?: string;
}

export {
  type CreateUserPayload,
  type VerificationPayload
};