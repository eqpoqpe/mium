import { authLimit } from "../src/app/util/limit";

const password = "ptauEixhYKtttYmH";
const email = "no-report@example.com";

test("Test for password", () => {
  const result = authLimit.password(password);

  expect(result).toBe(true);
});

test("Test for email", () => {
  const result = authLimit.email(email);

  expect(result).toBe(true);
});