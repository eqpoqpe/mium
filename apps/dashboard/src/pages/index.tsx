// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { classNameConcat } from "@eqpoqpe/classname-utils";
import { AuthDefender } from "../components/AuthDefender";

function Component() {
  return (
    <AuthDefender>
      <div
        className={classNameConcat([
          "dark:bg-stone-700",
          "bg-white"
        ])}
      >
      </div>

    </AuthDefender>
  );
}

export { Component };
