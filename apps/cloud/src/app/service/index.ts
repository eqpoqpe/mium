import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { generateUniqueRandomStrings } from "../util";

const prismaClient = new PrismaClient();

async function search(id: string) {
  const result = await prismaClient.user.findUnique({ where: { id: id } });

  return result;
}

async function addCoureseSelection() {
  const result = await prismaClient.courseSelection.create({ data: {} });

  return result;
}

async function createUser() {
  const salt = crypto.randomBytes(16).toString("hex");
  const onlyKey = generateUniqueRandomStrings(4).join(" ");
  const result = await prismaClient.user.create({
    data: {
      only_key: onlyKey,
      // password: "",
      salt: salt,
      // UserInfos: {}
    }
  });

  return result;
}

export {
  search,
  addCoureseSelection,
  createUser
};