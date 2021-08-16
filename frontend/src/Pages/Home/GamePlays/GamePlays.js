import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import HomeServices from "../../../Services/Home";

import "./GamePlays.css";

const Gameplay = () => {
  const [thumb, setThumb] = useState([]);
  const [name, setName] = useState([]);
  const [slug, setSlug] = useState([]);

  useEffect(() => {
    HomeServices.gameplay().then((res) => {
      setThumb(res.map((res) => res.thumb));
      setName(res.map((res) => res.name));
      setSlug(res.map((res) => res.slug));
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    useTransform: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          vertical: false,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          vertical: true,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="gameplay">
      <Slider {...settings}>
        {name.map((res, i) => {
          return (
            <div key={i} className="gameplay-block">
              <div>
                <img src={thumb[i]} alt={res} />
                <Link to={`${slug[i]}`}></Link>
              </div>
              <div className="gameplay-title">{res}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Gameplay;
