import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("AvatarE Model Tests", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    await prisma.avatarE.deleteMany();
  });

  it("should create a new user", async () => {
    const avatarData = Buffer.from("avatar-data");
    const newUser = await prisma.avatarE.create({
      data: { avatar: avatarData }
    });
    expect(newUser.id).toBeDefined();
  });
});
