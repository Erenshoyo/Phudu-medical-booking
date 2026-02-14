import React from "react";
import { useLoaderData } from "react-router";

const DoctorDetails = () => {
  const data = useLoaderData();

  console.log(data);

  const {
    doctor_name,
    bio,
    image_url,
    education,
    location,
    registration_number,
    available_days,
    available_time,
  } = data;
  return (
    <div className="w-11/12 mx-auto mt-8">
      <div className="flex flex-col justify-center items-center bg-white mt-8 py-20 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold mb-3">
          Doctor's Profile Details
        </h1>
        <p className="text-slate-600 mt-1">
          This is <strong>{doctor_name}</strong>. {bio}
        </p>
      </div>
      <div className="my-8 flex">
        <div><img src={image_url} alt="" /></div>
        <div>
            <h1>{doctor_name}</h1>
            <h3>{education}</h3>
            <p>Working at</p>
            <p>{location}</p>
            <p>Reg No: {registration_number}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
