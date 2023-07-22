import { Context, Next} from "koa";

function errorHandler() {
  return async (ctx: Context, next: Next) => {
    try {
      await next();
    } catch (err: any) {
      console.error(err);
  
      ctx.status = err.statusCode || err.status || 500;
      ctx.body = {
        error: err.message
      };
    }
  }
}

export default errorHandler;