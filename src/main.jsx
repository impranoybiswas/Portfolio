import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ScrollProvider from "./providers/ScrollProvider";
import ThemeProvider from "./providers/ThemeProvider";
import "./index.css";
import App from "./App";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./layouts/Contact";

const root = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    Component: Contact
  }
  
])

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <ScrollProvider>
        <RouterProvider router={router} />
      </ScrollProvider>
    </ThemeProvider>
  </StrictMode>
);
