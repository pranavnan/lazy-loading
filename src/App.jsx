import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { lazy } from "react";
import Root from "./Root";
import Home from "./Home";

const Store = lazy(() => import("./Store"));
const About = lazy(() => import("./About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
