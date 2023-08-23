// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { RouterProvider } from "react-router-dom";
import router from "./routers";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;