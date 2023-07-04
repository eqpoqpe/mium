import express from "express";
import { ServerResult } from "../../types";

const addRotuer = express.Router();

addRotuer.post("/", async (request, response) => {
  const serverResult: ServerResult & { echo?: string } = {
    error: "limit",
    echo: request.body.talk
  };

  response.json(serverResult);
})

export default addRotuer;