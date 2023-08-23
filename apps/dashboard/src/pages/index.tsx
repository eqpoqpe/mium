// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { Outlet } from "react-router-dom";
import { AuthProvider } from "../providers/AuthProvider";

function Component() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}

export { Component };
