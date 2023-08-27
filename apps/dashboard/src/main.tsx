// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { Logo } from "@mium/previous";
import App from "./App";

const logo = Logo.logoTitle();

console.log(logo);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);