import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <div className="w-11/12 mx-auto overflow-hidden">
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center  px-6">
        <div className="text-center max-w-lg">
          <h1 className="text-[120px] font-extrabold text-blue-600 leading-none">
            404
          </h1>

          <div className="w-20 h-1 bg-blue-500 mx-auto my-6 rounded-full"></div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Page Not Found
          </h2>

          <p className="text-gray-500 mb-8">
            The page you're looking for doesn’t exist or was moved somewhere
            else.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
