import { removeSpaces } from "@mium/utils";

type Limiter = { [key: string]: (data?: string) => boolean; };

// limiters for auth
const authLimit: Limiter = {

  /**
   * The minimum password length is typically 8 characters.
   */
  password(data) {
    if (!!data) {
      const str = removeSpaces(data);

      return str.length >= 8;
    }

    return false;
  },
  email(data): boolean {
    if (!!data) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      return emailRegex.test(data);
    }

    return false;
  }
};

export {
  authLimit
};