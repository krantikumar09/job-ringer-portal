import React from 'react'
import Slider from "react-slick";
import JobCard from "./JobCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";



// Custom Next Arrow
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} hidden md:block`}
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          right: "-30px",
          zIndex: 1,
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          color: "black",
        }}
      >
        <ArrowForwardIosOutlinedIcon />
      </button>
    );
  };
  
  // Custom Previous Arrow
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} hidden md:block`}
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          left: "-30px",
          zIndex: 1,
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          color: "black",
        }}
      >
        <ArrowBackIosNewOutlinedIcon />
      </button>
    );
  };

const CardSlider = ({ jobList }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        padding: "20px",
        nextArrow: <NextArrow />, // Add custom next arrow
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024, // For screens <= 1024px
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              arrow: false,
            },
          },
          {
            breakpoint: 768, // For screens <= 768px
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div>
        <Slider {...settings}>
          {jobList.map((item, index) => (
            <JobCard
              key={index}
              id={item.id}
              jobPosition={item.jobPosition}
              duration={item.duration}
              experience={item.experience}
              location={item.location}
              work={item.work}
            />
          ))}
        </Slider>
    </div>
  )
}

export default CardSlider