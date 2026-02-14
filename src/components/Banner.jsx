import React from "react";
import bannerImage1 from "../assets/Frame 2087325956.png";
import bannerImage2 from "../assets/Gemini_Generated_Image_ws84mgws84mgws84.png";

const Banner = () => {
  return (
    <div className=" mt-5 p-1 bg-linear-to-b from-white to-gray-100 rounded-3xl shadow-xl shadow-gray-300">
      <div className="rounded-3xl bg-gray-100 ">
        <div className="flex flex-col justify-center items-center w-2/3 mx-auto">
          <h1 className="text-5xl text-center font-bold mt-14">
            Dependable Care, Backed by Trusted Professionals.
          </h1>
          <p className="w-11/12 text-slate-600 mt-6 text-center">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
          <div className="mt-6 flex gap-3">
            <input
              className="input lg:w-3xl rounded-2xl p-5"
              type="text"
              placeholder="Search any doctor..."
            />
            <input
              className="btn bg-[#176AE5] hover:bg-[#1356b8] text-white rounded-full px-6"
              type="button"
              value="Search Now"
            />
          </div>
          <div className="flex justify-center gap-3 mt-10 mb-14">
            <img
              className="md:w-90 md:h-45 lg:w-144.5 lg:h-87.5 rounded-xl"
              src={bannerImage1}
              alt=""
            />
            <img
              className="md:w-90 md:h-45 lg:w-144.5 lg:h-87.5 rounded-xl"
              src={bannerImage2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
