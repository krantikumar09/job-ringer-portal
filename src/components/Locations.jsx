import React from "react";

const Locations = () => {
  const inIndia = [
    "Mumbai",
    "Delhi",
    "Ajmer",
    "Pune",
    "Hyderabad",
    "Agra",
    "Chennai",
    "Kolkata",
    "Indore",
    "Gurugram",
    "Jaipur",
  ];

  const international = [
    "Africa",
    "UAE",
    "USA",
    "Australia",
    "Canada",
    "Singapore",
    "Dubai",
    "Saudi Arabia",
    "Newzealand",
  ];
  return (
    <div className="loation">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold mb-3 uppercase text-center">
            jobs in india
          </h2>
          <div className="flex gap-2 flex-wrap">
            {inIndia.map((item, index) => (
              <span className="text-base text-black text-center" key={index}>
                #{item}
              </span>
            ))}
          </div>
        </div>
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold mb-3 uppercase text-center">
            international jobs
          </h2>
          <div className="flex gap-2 flex-wrap">
            {international.map((item, index) => (
              <span className="text-base text-black text-center" key={index}>
                #{item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
