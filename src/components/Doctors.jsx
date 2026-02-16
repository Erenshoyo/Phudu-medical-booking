import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import CountUp from "react-countup";

import count1 from "../assets/fi_15536380.png";
import count2 from "../assets/fi_7804340.png";
import count3 from "../assets/fi_3160069.png";
import count4 from "../assets/fi_2854545.png";

const STATS_DATA = [
  { id: 1, icon: count1, count: 199, label: "Total Doctors" },
  { id: 2, icon: count2, count: 467, label: "Total Reviews" },
  { id: 3, icon: count4, count: 1900, label: "Patients" },
  { id: 4, icon: count3, count: 300, label: "Total Staff" },
];

const Doctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("DoctorData.json")
      .then((res) => res.json())
      .then((data) => setAllDoctors(data));
  }, []);

  //   console.log(allDoctors);
  const doctorDisplayed = showAll ? allDoctors : allDoctors.slice(0, 6);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="md:w-2/3 mx-auto mb-10">
      <div className="mt-30 mb-10 text-center">
        <h1 className="text-3xl font-bold">Our Best Doctors</h1>
        <p className="text-slate-500 mt-2">
          Our platform connects you with verified, experienced doctors across
          various specialities - all at your convenience. Whether it's a routine
          checkup or urgent consulation, book appoinments in minutes and recieve
          quality care you can trust.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        {doctorDisplayed.map((doctor) => (
          <DoctorCard key={doctor.doctor_id} doctor={doctor}></DoctorCard>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleViewAll}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 transition-colors"
        >
          {showAll ? "Collapse" : "View All Doctors"}
        </button>
      </div>


      <div className="my-20">
        <h1 className="text-center text-4xl leading-relaxed font-extrabold">
          We Provide Best Medical Services
        </h1>
        <p className="text-center mb-10">
          Our platform connects your with verified, experienced doctors across
          various specialties-all at your convenience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="bg-white flex flex-col items-center gap-2 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                className="w-15 h-15 object-contain"
                src={stat.icon}
                alt={stat.label}
              />
              <h1 className="text-5xl font-extrabold ">
                <CountUp end={stat.count} duration={10} />+
              </h1>
              <span className="text-gray-600 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
