import React from "react";
import { assets } from "../assets/assets";

const AppDownalod = () => {
  return (
    <div className="app-download mt-12 bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-red-400">
        <div>
          <h2 className="text-2xl text-black font-medium mb-2 uppercase">apply to jobs on-the-go</h2>
          <p className="text-md text-darkBlue font-medium mb-4">Jobringer Mobile App</p>
          <h1 className="text-3xl text-black font-bold">
            Mobile App <span className="text-darkBlue">Download</span>
          </h1>
          <div className="hidden">
            <img
              className="w-8"
              loading="lazy"
              src={assets.googlePlay}
              alt="google play"
            />
            <img
              className="w-8"
              loading="lazy"
              src={assets.AppStore}
              alt="app store"
            />
          </div>
        </div>

        <div>
          <img src={assets.mobileApp} loading="lazy" alt="mobile app" />
        </div>
      </div>
    </div>
  );
};

export default AppDownalod;
