import app from "./app";

const server = app.listen(3000, "0.0.0.0", 0, () => {
  console.log(`
🚀 Server ready at: http://localhost:3000
`)
});

server.on("request", function () { });