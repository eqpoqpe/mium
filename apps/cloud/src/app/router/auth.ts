import express from "express";
import { base64url, EncryptJWT } from "jose";

const authRouter = express.Router();

authRouter.get("/", async (request, response, next) => {
  const secret = base64url.decode("zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02alfL1lvI")
  const jwt = await new EncryptJWT({ "urn:example:claim": true })
    .setProtectedHeader({ alg: 'dir', enc: "A128CBC-HS256" })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("2h")
    .encrypt(secret)

  response.setHeader("Bearer-JWT", jwt);
  response.send("2333");
});

export default authRouter;