import Router from "@koa/router";
import { indexController } from "../controller/add";

const addRouter = new Router();

addRouter.get("/", indexController);

export default addRouter;