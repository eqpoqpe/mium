import express from "express";
import { search } from "../service";
import { greet } from "@mium/tryrs";


const searchRotuer = express.Router();

searchRotuer.get("/", async (request, response) => {
  const id = request.query.id?.toString() ?? "";

  if (id === "") {
    response.json(greet());
  } else {
    const result = await search(id);

    response.json(result);
  }
})

export default searchRotuer;