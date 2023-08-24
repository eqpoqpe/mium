// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import App from "./app";
import config from "./config";

const server = App(config).listen(config.port ?? 3000, "0.0.0.0", 0, () => {
  console.log(`
🚀 Server ready at: http://localhost:${config.port ?? 3000}
`)
});