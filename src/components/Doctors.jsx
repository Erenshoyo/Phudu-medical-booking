import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);

  useEffect(() => {
    fetch("DoctorData.json")
      .then((res) => res.json())
      .then((data) => setAllDoctors(data));
  }, []);

  //   console.log(allDoctors);

  return (
    <div className="w-2/3 mx-auto">
      <div className="my-30 text-center">
        <h1 className="text-3xl font-bold">Our Best Doctors</h1>
        <p className="text-slate-500">
          Our platform connects you with verified, experienced doctors across
          various specialities - all at your convenience. Whether it's a routine
          checkup or urgent consulation, book appoinments in minutes and recieve
          quality care you can trust.
        </p>
      </div>
      <div className="grid lg:grid-cols-3">
        {allDoctors.map((doctor) => (
          <DoctorCard key={doctor.doctor_id} doctor={doctor}></DoctorCard>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
