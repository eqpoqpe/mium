import express from "express";

const authRouter = express.Router();

authRouter.get("/", async (request, response) => {
  response.json({});
});

export default authRouter;