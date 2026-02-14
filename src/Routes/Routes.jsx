import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Blogs from "../components/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",

        Component: Home,
      },
      {
        path: "/blogs",
        Component: Blogs,
        loader: async() => {
          const response = await fetch("/blogsData.json");
          return response.json();
        }
      },
    ],
  },
]);
