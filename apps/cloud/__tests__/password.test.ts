import { hashPassword, verifyPassword } from "../src/app/util/security";

const salt = "9a23513d5919c023b434886cdddc35d5";
const password = "ptauEixhYKtttYmH";
const hask = "a657c1e57e6ac6493eeb0c8baa3bee4ba1f7d67410605c5f43d1c227920ecb6b525bc37d7f503ba1bbc8c4e60212d8a3146d78aa73960911c45f1f8861a7de57"

test("Test for hashPassword", async () => {
  const result = await hashPassword(password, salt);

  expect(result).toBe(hask);
});

test("Test for verifyPassword", async () => {
  const result = await verifyPassword(password, salt, hask);

  expect(result).toBe(true);
});