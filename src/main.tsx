import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

import "~/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = document.getElementById("root");

if (root == null) {
  throw Error("root element not found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);