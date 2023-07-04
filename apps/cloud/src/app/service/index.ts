import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function search(id: string) {
  const result = await prismaClient.user.findUnique({ where: { id: id } });

  return result;
}

export {
  search
};