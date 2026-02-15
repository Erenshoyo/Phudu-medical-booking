import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Blogs from "../components/Blogs";
import DoctorDetails from "../components/DoctorDetails";
import Bookings from "../components/Bookings";

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
        loader: async () => {
          const response = await fetch("/blogsData.json");
          return response.json();
        },
      },
      {
        path: "/doctorDetails/:education",
        Component: DoctorDetails,
        loader: async ({ params }) => {
          const response = await fetch("/DoctorData.json");
          const doctors = await response.json();
          return doctors.find(
            (doctor) => doctor.education === params.education,
          );
        },
      },
      {
        path: "/bookings",
        Component: Bookings,
        loader: async ({ params }) => {
          const response = await fetch("/DoctorData.json");
          const doctors = await response.json();
          return doctors.find(
            (doctor) => doctor.education === params.education,
          );
        },
      },
    ],
  },
]);
