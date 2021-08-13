import React from "react";
import Slider from "react-slick";

import "./AdHeader.css";

export default function AdHeader(){
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="ad">
      <Slider {...settings}>
        <div>
          <img alt={"1"} src={"/ad1.jpg"} />
        </div>
        <div>
          <img alt={"2"} src={"/ad2.jpg"} />
        </div>
        <div>
          <img alt={"3"} src={"/ad3.jpg"} />
        </div>
      </Slider>
    </div>
  );
};


