// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    lazy: () => import("../pages/index"),
    children: [
      {
        path: "dashboard/:slug",
        lazy: () => import("../pages/dashboard")
      },
      {
        path: "auth",
        lazy: () => import("../pages/auth")
      }
    ],
  },
  {
    path: "404",
    lazy: () => import("../pages/NotFound"),
  },
  {
    path: "*",
    lazy: () => import("../pages/NotFound"),
  },
];
const router = createBrowserRouter(routes);

export default router;