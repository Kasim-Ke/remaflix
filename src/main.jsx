import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/Home.jsx";
import { LogIn } from "./components/LogIn.jsx";
import { SignUp } from "./components/SignUp.jsx";

const router = createBrowserRouter([
  { path: "/remaflix/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <LogIn /> },
  { path: "/signup", element: <SignUp /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
