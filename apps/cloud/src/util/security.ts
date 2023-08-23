import crypto from "crypto";

// generate the hash value of a password
function hashPassword(password: string, salt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 10000, 64, "sha512", (err, derivedKey) => {
      if (err) {
        reject(err);
      } else {
        const hashedPassword = derivedKey.toString("hex");
        resolve(hashedPassword);
      }
    });
  });
}

// verify if a password matches the stored hashed password
function verifyPassword(password: string, salt: string, hashedPassword: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 10000, 64, "sha512", (err, derivedKey) => {
      if (err) {
        reject(err);
      } else {
        const derivedPassword = derivedKey.toString("hex");
        resolve(derivedPassword === hashedPassword);
      }
    });
  });
}

export {
  hashPassword,
  verifyPassword
};