import React from "react";
import Navbar from "../components/Navbar";
import EmployeeLogin from "../components/EmployeeLogin";
import JobSearch from "../components/JobSearch";
import FeatureJob from "../components/FeatureJob";
import RemoteJob from "../components/RemoteJob";
import AppDownalod from "../components/AppDownalod";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home h-screen">
      <Navbar />
      <div className="container mx-auto px-3">
        <EmployeeLogin />
        <JobSearch />
        <FeatureJob />
        <RemoteJob />
        <AppDownalod />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
