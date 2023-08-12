import App from "./app";

async function main() {
  const server = (await App()).listen(3000, "0.0.0.0", 0, () => {
    console.log(`
  🚀 Server ready at: http://localhost:3000
  `)
  });
}

main();