import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/app/util/security";
import { generateUniqueRandomStrings } from "../src/app/util/only-key";

const salt = "9a23513d5919c023b434886cdddc35d5";
const password = "ptauEixhYKtttYmH";
const onlyKey = generateUniqueRandomStrings(4).join(" ");

const prisma = new PrismaClient();

describe("User Model Tests", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  it("should create a new user", async () => {
    const hash = await hashPassword(password, salt);
    const newUser = await prisma.user.create({
      data: {
        only_key: onlyKey,
        password: hash,
        salt: salt,
        email: "no-report@example.com",
        UserInfos: {
          create: {
            name: "Ryan Martin"
          }
        }
      },
      include: {
        UserInfos: true
      }
    });

    expect(newUser.id).toBeDefined();
  });
});
