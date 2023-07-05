import Router from "@koa/router";
import { addCoureseSelection } from "../service";

const addRouter = new Router();

addRouter.get("/", async (ctx) => {
  ctx.body = "add done";
  addCoureseSelection();
});

export default addRouter;