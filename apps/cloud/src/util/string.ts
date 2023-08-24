import { removeSpaces } from "@mium/utils";

function isValidEmail(email?: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (typeof email !== "undefined" && emailRegex.test(removeSpaces(email)));
}

export {
  isValidEmail
};