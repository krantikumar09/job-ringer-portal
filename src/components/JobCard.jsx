import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const JobCard = ({
  id,
  companyName,
  jobPosition,
  duration,
  experience,
  location,
  work,
}) => {
  return (
    <div className="job-card" key={id}>
      <div className="relative card bg-base-100 w-auto border border-gray-300 overflow-hidden">
        <div className="absolute top-0 right-0 bg-yellow w-fit px-3 rounded-sm">
          <span className="text-sm text-black font-medium">{work}</span>
        </div>
        <div className="card-body p-5">
          <h2 className="card-title mt-4">{jobPosition}</h2>
          <div>
            <h5>{companyName}</h5>
            <p className="text-sm font-normal text-lightGray mb-3"><AccessTimeIcon style={{ fontSize: 16, marginRight: "6px"}} />{duration}</p>
            <p className="text-sm font-normal text-lightGray mb-3"><WorkOutlineOutlinedIcon style={{ fontSize: 16, marginRight: "6px"}} />{experience}</p>
            <p className="text-sm font-normal text-lightGray mb-3"><LocationOnOutlinedIcon style={{ fontSize: 16, marginRight: "6px"}} />{location}</p>
          </div>
            <button className="mt-3 btn bg-lightBlue text-white font-sm font-bold border-lightblue hover:bg-lightBlue hover:text-white transition-all">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
