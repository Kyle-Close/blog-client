import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/userContext.tsx";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
