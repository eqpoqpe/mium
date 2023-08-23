import { exec } from "node:child_process";
import "dotenv/config";

var postgres_version = "latest";
var docker = "podman";

exec(`${docker} run \
  -d \
  --name mium-db-1 \
  -e POSTGRES_USER=${process.env.USER_NAME} \
  -e POSTGRES_PASSWORD=${process.env.DB_PASSWORD} \
  -e POSTGRES_DB=${process.env.DB_NAME} \
  -p 5432:5432 \
  -d postgres:${postgres_version}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`: ${error.message}`);
    return;
  }
  console.log(`:\n${stdout}`);
});