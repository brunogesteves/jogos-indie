import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Slide.css";
import HomeServices from "../../../Services/Home";

export default function Slide() {
  const [thumb, setThumb] = useState([]);
  const [name, setName] = useState([]);
  const [slug, setSlug] = useState([]);

  useEffect(() => {
    HomeServices.slide().then((res) => {
      setThumb(res.map((res) => res.thumb));
      setName(res.map((res) => res.name));
      setSlug(res.map((res) => res.slug));
    });
  }, []);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "5px",
          top: "-12px",
          background: "black",
          borderRadius: "13px",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "641px",
          top: "-12px",
          background: "black",
          borderRadius: "13px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="newGame">
      <Slider {...settings} className="newGame-item">
        {name.map((res, i) => (
          <div key={i}>
            <Link to={`${slug[i]}`}>
              <img key={i} src={thumb[i]} alt={res} />
              <div className="newGame-item-name">{name[i]}</div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
