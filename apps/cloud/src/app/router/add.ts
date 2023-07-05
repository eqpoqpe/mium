import Router from "@koa/router";
import { addCoureseSelection } from "../service";

const addRouter = new Router();

addRouter.get("/", async (ctx) => {
  try {
    await addCoureseSelection();

    ctx.body = "add done";
  } catch (error) {
    ctx.body = "add error";
  }
});

export default addRouter;