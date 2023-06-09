import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlockDetails from "../components/blockdetails";
import { MyTransaction } from "../components/transaction";
import App from "../src/App";
import { useState } from "react";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blocks/:rowno",
    element: <BlockDetails />,
  },
  {
    path: "/transaction/:transactionID",
    element: <MyTransaction />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
