import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <>
          <Footer></Footer>
        </>
      </div>
    </>
  );
};

export default Root;
