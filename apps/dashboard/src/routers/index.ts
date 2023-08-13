import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    lazy: () => import("../pages/index")
  }
];
const router = createBrowserRouter(routes);

export default router;