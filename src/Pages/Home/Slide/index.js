import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Slide.css";

import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS_SLIDE } from "../../../Graphql/Queries";

export default function Slide() {
  const { data } = useQuery(GET_ALL_POSTS_SLIDE);


  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "34px",
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
          left: "631px",
          top: "-12px",
          background: "black",
          borderRadius: "13px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
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
        {data &&
          data.getAllPostsHome.map((res, i) => (
            <div key={i}>
              <Link to={`${res.slug}`}>
                <img key={i} src={res.thumb} alt={res} />
                <div className="newGame-item-name">{res.name}</div>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
}
