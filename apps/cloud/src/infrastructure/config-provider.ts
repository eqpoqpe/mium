// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import type Application from "koa";
import { ApplicationConfig } from "../types";

interface IConfigProvider {
  config: Readonly<ApplicationConfig>;
}

function configProvider(app: Application, config: ApplicationConfig) {
  const _usekey = "config";

  app.context[_usekey] = config;
}

export {
  configProvider,
  type IConfigProvider
};