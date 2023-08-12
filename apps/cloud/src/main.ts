import App from "./app";

const server = App().listen(3000, "0.0.0.0", 0, () => {
  console.log(`
🚀 Server ready at: http://localhost:3000
`)
});

server.on("request", function () { });