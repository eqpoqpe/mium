// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { ApplicationConfig } from "./types";

function hasProviderCode(config: ApplicationConfig) {
  return !!config.privoder;
}

const config: ApplicationConfig = {
  prefix: "/api",
  port: 3000,
  privoder: true,
  cache: {

    // 7 day
    stdTTL: (60 * 60 * 12 * 7)
  }
};

export default config;
export {
  hasProviderCode
};