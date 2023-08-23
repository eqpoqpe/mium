interface CreateUserPayload {
  
  // 8 characters
  password: string;
  email: string;
}

// uniqueVerification
interface VerificationPayload {
  provided_value?: string;
}

export {
  type CreateUserPayload,
  type VerificationPayload
};