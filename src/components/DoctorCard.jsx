import { IdCard } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { checkAvailability } from "../Utilities/dateUtils";

const DoctorCard = ({ doctor }) => {
  // console.log(doctor);
  const {
    image_url,
    experience_years,
    doctor_name,
    education,
    registration_number,
    available_days,
    available_time,
  } = doctor;

  const isAvailable = checkAvailability(available_days, available_time);
  return (
    <div className="">
      <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
        <div className="w-full h-100 overflow-hidden rounded-lg mb-4 bg-gray-100">
          <img
            src={image_url}
            alt={doctor_name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex grow gap-3">
          <div className="mb-3">
            {isAvailable ? (
              <p className="bg-green-100 text-green-700 px-3 py-2 rounded-full border border-green-200 text-xs font-medium">
                Available
              </p>
            ) : (
              <p className="bg-red-100 text-red-700 px-3 py-2 rounded-full border border-red-200 text-xs font-medium">
                Not Available
              </p>
            )}
          </div>
          <h5 className="mb-3 bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-xs font-medium">
            {experience_years}+ Years Experience
          </h5>
        </div>
        <h1 className="text-xl font-bold text-gray-900">{doctor_name}</h1>
        <p className="text-gray-500 text-sm mb-4">{education}</p>
        <p className="flex gap-2 items-center text-gray-600 text-sm mt-auto">
          <IdCard size={18} /> Reg No: {registration_number}
        </p>
        <Link className="mt-4 block w-full text-center border border-blue-500 text-blue-500 font-semibold py-2 rounded-full hover:bg-blue-50 transition-colors">View Details</Link>
      </div>
    </div>
  );
};

export default DoctorCard;
