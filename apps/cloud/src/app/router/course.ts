import express from "express";
import { addCoureseSelection } from "../service/";

const courseRouter = express.Router();

courseRouter.post("/", async (request, response) => {
  const result = await addCoureseSelection();

  response.json(result);
})

export default courseRouter;