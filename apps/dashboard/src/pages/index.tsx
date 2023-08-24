// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { Outlet } from "react-router-dom";
import { AuthDefender } from "../components/AuthDefender";

function Component() {
  return (
    <AuthDefender>
      <Outlet />
    </AuthDefender>
  );
}

export { Component };
