import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function search(id: string) {
  const result = await prismaClient.user.findUnique({ where: { id: id } });

  return result;
}

async function addCoureseSelection() {
  const result = await prismaClient.courseSelection.create({ data: {} });

  return result;
}

export {
  search,
  addCoureseSelection
};