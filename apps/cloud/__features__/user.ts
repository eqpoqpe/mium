// import { PrismaClient } from "@prisma/client";
// import { hashPassword } from "../src/app/util/security";
// import { generateUniqueRandomStrings } from "../src/app/util/only-key";

// const salt = "9a23513d5919c023b434886cdddc35d5";
// const password = "ptauEixhYKtttYmH";
// const onlyKey = generateUniqueRandomStrings(4).join(" ");

// const prisma = new PrismaClient();

// async function createUser() {
//   const hash = await hashPassword(password, salt);

//   const newUser = await prisma.user.create({
//     data: {
//       only_key: onlyKey,
//       password: hash,
//       salt: salt,
//       email: "no-report@example.com",
//       UserInfos: { create: { name: "Ryan Martin" } }
//     },
//     include: {
//       UserInfos: true
//     }
//   });

//   return newUser;
// }

// async function updateUserInfos(id: string) {
//   const result = await prisma.userInfos.findUnique({ where: { token: id } });

//   return result;
// }

// async function main() {
//   try {
//     await prisma.user.deleteMany();
//     await prisma.userInfos.deleteMany();
//     const newUser = await createUser();
//     const userInfosId = newUser.UserInfos?.[0].token;
//     const newUserInfos = await updateUserInfos(userInfosId);
//     console.log(newUserInfos);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// main();