import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import Providers from "./AuthProviders/Providers";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Providers>
  </React.StrictMode>
);
