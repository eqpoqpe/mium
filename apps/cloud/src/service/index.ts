import { PrismaClient, Prisma } from "@prisma/client";
import crypto from "crypto";
import {
  generateUniqueRandomStrings,
  hashPassword,
  verifyPassword
} from "../util";

const prismaClient = new PrismaClient();

async function search(id: string) {
  const result = await prismaClient.user.findUnique({ where: { id: id } });

  return result;
}

async function addCoureseSelection() {
  const result = await prismaClient.courseSelection.create({ data: {} });

  return result;
}

async function createUser(password: string, email: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const onlyKey = generateUniqueRandomStrings(4).join(" ");
  const passwordHash = await hashPassword(password, salt);

  const result = await prismaClient.user.create({
    data: {
      only_key: onlyKey,
      password: passwordHash,
      salt: salt,
      email: email
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