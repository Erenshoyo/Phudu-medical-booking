import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ToastContainer, toast } from "react-toastify";

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  if (x == null || y == null || width == null || height == null) return null;
  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
};
const Bookings = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAppointments(stored);
  }, []);

  const chartData = appointments.reduce((acc, curr) => {
    const found = acc.find((item) => item.name === curr.doctor_name);

    // Convert fee to a number to avoid string concatenation issues
    const currentFee = Number(curr.fee) || 0;

    if (found) {
      found.fee += currentFee;
    } else {
      acc.push({
        name: curr.doctor_name,
        fee: currentFee,
      });
    }
    return acc;
  }, []);

  const handleCancel = (id) => {
    const updated = appointments.filter((item) => item.id !== id);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    toast.error("Appoinment Cancelled.");
  };

  if (appointments.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center space-y-6">
        <ToastContainer position="top-right" autoClose={1500} />
        <h2 className="text-3xl font-bold text-slate-800">
          No Appointments Found
        </h2>

        <Link to="/" className="btn bg-blue-600 text-white rounded-full px-8">
          Go To Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="w-11/12 max-w-5xl mx-auto py-10 space-y-6">
      <ToastContainer position="top-right" autoClose={1500} />

      <div className="w-11/12 max-w-5xl mx-auto py-10 space-y-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">My Today Appointments</h1>
          <p className="text-slate-500 mt-2">
            Our platform connects you with verified doctors across specialities.
          </p>
        </div>
        {appointments.length > 0 && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-6 text-slate-700">
              Appointments Distribution
            </h3>
            <div className="h-75 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  {/* Add a prefix to the YAxis ticks if you like, e.g., $ */}
                  <YAxis tickFormatter={(value) => `$${value}`} />
                  <Tooltip formatter={(value) => [`$${value}`, "Total Fees"]} />
                  <Bar
                    dataKey="fee" // Change this from "count" to "fee"
                    fill="#8884d8"
                    shape={<TriangleBar />}
                    label={{ position: "top", formatter: (val) => `$${val}` }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
        {/* Appointment Cards */}
        <div className="space-y-6">
          {appointments.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              {/* Top Row */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold">{item.doctor_name}</h3>

                  <p className="text-slate-500 text-sm">{item.education}</p>

                  <p className="text-slate-500 text-sm">{item.speciality}</p>
                </div>

                <p className="font-semibold">
                  Appointment Fee: {item.fee} {item.currency} + Vat
                </p>
              </div>

              {/* Cancel Button */}
              <button
                onClick={() => handleCancel(item.id)}
                className="w-full border border-red-500 text-red-500 py-2 rounded-full hover:bg-red-500 hover:text-white transition"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
