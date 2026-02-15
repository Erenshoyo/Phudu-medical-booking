import React, { useState } from "react";
import phuduLogo from "../assets/fi_16340199.png";
import { Link } from "react-router";

// 1. Define links array to avoid code duplication
const navOptions = [
  { name: "Home", path: "/" },
  { name: "My-Bookings", path: "/bookings" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const handleActiveStatus = (name) => {
    setActive(name);
  };
  // 2. Helper to render links
  const renderLinks = () =>
    navOptions.map((link) => (
      <li key={link.name}>
        <Link
          to={link.path}
          onClick={() => handleActiveStatus(link.name)}
          className={active === link.name ? "bg-blue-400 text-white" : ""}
        >
          {link.name}
        </Link>
      </li>
    ));

  return (
    <div className="navbar bg-base-100 border border-slate-300 mt-5 rounded-2xl shadow-sm">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-sm"
          >
            {renderLinks()}
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl font-extrabold flex justify-center items-center gap-2 mx-5"
        >
          <img
            src={phuduLogo}
            alt="Phudu Logo"
            className="w-6 h-6 object-contain"
          />
          Phudu
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-slate-500">
          {renderLinks()}
        </ul>
      </div>

      {/* Action Button */}
      <div className="navbar-end">
        <a
          href="/emergency"
          className="btn bg-[#176AE5] hover:bg-[#1356b8] text-white rounded-full px-6"
        >
          Emergency
        </a>
      </div>
    </div>
  );
};

export default Navbar;
