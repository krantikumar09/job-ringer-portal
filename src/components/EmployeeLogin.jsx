import React from "react";

const EmployeeLogin = () => {
  return (
    <div className="w-full py-4 px-4 bg-gradient-to-r from-blue-400 to-darkBlue  mt-[100px] rounded-2xl">
      <div className="flex text-start md:items-center justify-between flex-col md:flex-row gap-6">
        <h1 className="text-2xl md:text-3xl text-white uppercase font-bold">employers</h1>

        <div className="relative overflow-hidden w-fit hidden md:block">
          <div className="absolute inset-0 bg-yellow-500 animate-slideCover z-10"></div>

          <span className="relative text-base font-bold text-white z-20">
            WELCOME OFFER - FREE JOB Postings and much more.
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <button className="btn bg-yellow text-black font-sm font-medium border-yellow hover:bg-yellow hover:text-white hover:border-yellow transition-all">
            Register for FREE
          </button>

          <button className="btn bg-white text-black font-sm font-medium border-white hover:bg-white hover:text-black hover:border-white transition-all">
            Post a Job
          </button>
          <a className="text-sm font-medium underline text-white" href="#">
            Sales Enquiry
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
