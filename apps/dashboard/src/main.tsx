// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

async function main() {
  const { default: App } = await import("./App.tsx");

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

await main();
