// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { Logo } from "@mium/previous";
import App from "./app";
import config, { hasProviderCode } from "./config";

const providerCode = hasProviderCode(config);

// @ts-ignore
const server = App(config).listen(config.port ?? 3000, "0.0.0.0", 0, () => {
  console.log(`
  ${Logo.logoTitle()}

  🚀 Server ready at: http://localhost:${config.port ?? 3000}

  ${"Provider Server: " + (providerCode ? "On" : "Off")}
`);
});
