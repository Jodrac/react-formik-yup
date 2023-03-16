import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./config/router";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./context/UserContext";

import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </CssBaseline>
  </React.StrictMode>
);
