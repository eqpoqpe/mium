import { register } from "./register";
import Koa from "koa";
import { bodyParser } from "@koa/bodyparser";
import { CORS, errorHandler, limit } from "./app/middleware";

const app = new Koa();

app.use(errorHandler());
app.use(bodyParser());
app.use(CORS());
app.use(limit());
app.use(async (ctx: Koa.Context, next: Koa.Next) => {
  try {
    await next();
  } catch (err: any) {
    // 在这里处理错误，例如记录日志、发送错误响应等
    console.error(err);

    // 发送适当的错误响应给客户端
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      error: err.message
    };
  }
});
register(app);

const _ = app.listen(3000, "0.0.0.0", 0, () => {
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
});