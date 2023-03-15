import { createBrowserRouter } from "react-router-dom";

import LayoutRoot from "../layout/LayoutRoot";
import LayoutPrivate from "../layout/LayoutPrivate";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot></LayoutRoot>,
    children: [
      {
        index: true,
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: <LayoutPrivate></LayoutPrivate>,
        children: [
          {
            index: true,
            element: <Dashboard></Dashboard>,
          },
        ],
      },
    ],
  },
]);
