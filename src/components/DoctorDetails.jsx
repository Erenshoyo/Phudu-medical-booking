import { IdCard, Info } from "lucide-react";
import React from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router";
import { checkAvailability } from "../Utilities/dateUtils";
import { ToastContainer, toast } from "react-toastify";

const DoctorDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  if (!data) return <div className="text-center py-20">Loading...</div>;

  const {
    doctor_name,
    bio,
    image_url,
    education,
    location,
    registration_number,
    available_days,
    available_time,
    fee,
    currency,
  } = data;

  const isAvailable = checkAvailability(available_days, available_time);

  const handleBookAppointment = (e) => {
    e.preventDefault();

    if (!isAvailable) {
      toast.error("Doctor is currently not available.");
      return;
    }

    const previous = JSON.parse(localStorage.getItem("appointments")) || [];
    const exists = previous.find((item) => item.doctor_name === doctor_name);

    if (exists) {
      toast.warn("You have already booked an appointment with this doctor!");
      return;
    }

    previous.push({
      id: Date.now(),
      doctor_name,
      education,
      speciality: data.speciality,
      fee,
      currency,
    });

    localStorage.setItem("appointments", JSON.stringify(previous));
    toast.success("Appointment booked successfully!");

    setTimeout(() => {
      navigate("/bookings", { state: { doctor: data } });
    }, 1500);
  };

  return (
    <div className="w-11/12 max-w-5xl mx-auto py-10 space-y-6">
      <ToastContainer position="top-right" autoClose={1500} />
      <div className="bg-white p-12 rounded-4xl shadow-sm text-center border border-slate-100">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Doctor's Profile Details
        </h1>
        <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
          {bio || " "}
        </p>
      </div>

      <div className="bg-white p-8 rounded-4xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3">
          <img
            className="w-full aspect-square object-cover rounded-2xl bg-blue-100"
            src={image_url}
            alt={doctor_name}
          />
        </div>

        <div className="md:w-2/3 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-1">
            {doctor_name}
          </h2>
          <p className="text-slate-500 text-lg mb-4">{education}</p>

          <div className="space-y-4">
            <div>
              <p className="text-slate-400 text-sm">Working at</p>
              <p className="font-bold text-slate-800 text-lg leading-tight">
                {location}
              </p>
            </div>

            <div className="border-t border-dashed border-slate-200 pt-4 flex items-center gap-2 text-slate-500">
              <div className="border border-slate-300 rounded-full p-0.5">
                <IdCard size={14} />
              </div>
              <span className="text-sm font-medium">
                Reg No: {registration_number}
              </span>
            </div>

            <div className="border-t border-dashed border-slate-200 pt-4 flex flex-wrap items-center gap-4">
              <span className="font-bold text-slate-800">Availability</span>
              <div className="flex gap-2">
                {available_days?.map((day) => (
                  <span
                    key={day}
                    className="bg-orange-50 text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full border border-orange-100"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <span className="font-bold text-slate-800">
                Consultation Fee:
              </span>
              <span className="text-blue-600 font-bold">
                {currency} : {fee}
              </span>
              <span className="text-slate-400 text-sm">(incl. Vat)</span>
              <span className="text-blue-500 text-sm cursor-pointer">
                Per consultation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Appointment Card */}
      <div className="bg-white p-8 rounded-4xl shadow-sm border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Book an Appointment
        </h3>

        <div className="border-t border-dashed border-slate-200 py-4 flex justify-between items-center">
          <span className="font-bold text-slate-800">Availability</span>
          <span className="">
            {isAvailable ? (
              <p className="bg-green-100 text-green-700 px-3 py-2 rounded-full border border-green-200 text-xs font-medium">
                Available
              </p>
            ) : (
              <p className="bg-red-100 text-red-700 px-3 py-2 rounded-full border border-red-200 text-xs font-medium">
                Not Available
              </p>
            )}
          </span>
        </div>

        {/* Warning/Info Box */}
        {isAvailable ? (
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-6 flex items-start gap-3">
            <Info className="text-orange-400 shrink-0 mt-0.5" size={18} />
            <p className="text-orange-700 text-sm leading-snug">
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </p>
          </div>
        ) : (
          " "
        )}

        <Link
          to={`/bookings`}
          state={{ doctor: data }}
          onClick={handleBookAppointment}
          className={`btn w-full ${isAvailable ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"} text-white font-bold rounded-full transition-all shadow-md active:scale-95`}
        >
          Book Appointment Now
        </Link>
      </div>
    </div>
  );
};

export default DoctorDetails;
