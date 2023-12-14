import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <MainLayout />
  </RouterProvider>
);
