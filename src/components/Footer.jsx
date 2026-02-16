import React from "react";
import phuduLogo from "../assets/fi_16340199.png";
import fbLogo from "../assets/facebookLogo.png";
import linkedInLogo from "../assets/linkedInLogo.png";
import Xlogo from "../assets/twitter-logo-2 3.png";
import youtube from "../assets/youtube.png";
import { Link } from "react-router";

const navOptions = [
  { name: "Home", path: "/" },
  { name: "My-Bookings", path: "/bookings" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  const renderLinks = () =>
    navOptions.map((link) => (
      <li key={link.name}>
        <Link to={link.path} className="">
          {link.name}
        </Link>
      </li>
    ));
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center">
        <Link
          to="/"
          className=" mt-20 text-2xl font-extrabold flex justify-center items-center gap-2 mx-5"
        >
          <img
            src={phuduLogo}
            alt="Phudu Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-3xl">Phudu</h1>
        </Link>
        <div>
          <ul className="flex gap-4 text-slate-600 my-8">{renderLinks()}</ul>
        </div>
        <hr className="w-2/3 text-slate-300" />
        <div className="flex gap-4 mt-8 mb-20">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 h-8 hover:scale-110 transition-transform"
              src={fbLogo}
              alt="Facebook"
            />
          </a>

          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <img
              className="w-8 h-8 hover:scale-110 transition-transform"
              src={Xlogo}
              alt="X"
            />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 h-8 hover:scale-110 transition-transform"
              src={linkedInLogo}
              alt="LinkedIn"
            />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 h-8 hover:scale-110 transition-transform"
              src={youtube}
              alt="YouTube"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
