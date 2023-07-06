import { register } from "./register";
import Koa from "koa";
import { bodyParser } from "@koa/bodyparser";
import { CORS, errorHandler, limit } from "./app/middleware";

const app = new Koa();

app.use(errorHandler());
app.use(bodyParser());
app.use(CORS());
app.use(limit());
register(app);

const _ = app.listen(3000, "0.0.0.0", 0, () => {
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
});