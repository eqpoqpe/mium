import express from "express";

const addRotuer = express.Router();

addRotuer.param("id", async (request, response, next, value) => {
  next();
})
addRotuer.get("/:id", async (request, response) => {
  response.json({});
})

export default addRotuer;