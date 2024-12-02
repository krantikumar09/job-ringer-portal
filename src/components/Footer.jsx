import React from "react";
import Locations from "./Locations";
import SiteStat from "./SiteStat";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="bg-lightBlue pt-8">
      <div className="container mx-auto px-3">
        <Locations />
        <SiteStat/>
        <FooterLinks/>
      </div>
    </div>
  );
};

export default Footer;
