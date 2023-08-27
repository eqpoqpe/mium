// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { classNameConcat } from "@eqpoqpe/classname-utils";
import { Link } from "react-router-dom";

function Component() {
  return (
    <div>
      <div>
        <p className={classNameConcat(["text-4xl", "font-bold"])}>404</p>
      </div>
      <div>
        <Link to={"/"} replace={true}>
          <div>
            <p>Back Home</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export { Component };
