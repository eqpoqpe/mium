import { removeSpaces } from "@mium/utils";

function isValidEmail(email?: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (typeof email !== "undefined" && emailRegex.test(removeSpaces(email)));
}

function isValidProviderCode(str?: string) {
  return (typeof str !== "undefined" && str.length > 8);
}

export {
  isValidEmail,
  isValidProviderCode
};