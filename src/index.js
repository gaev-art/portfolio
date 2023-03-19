import React from "react";
import { createRoot } from "react-dom/client";

import "./i18n";
import "./index.css";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <h1 className="text-3xl font-bold underline">
      <App />
    </h1>
  </React.StrictMode>
);
