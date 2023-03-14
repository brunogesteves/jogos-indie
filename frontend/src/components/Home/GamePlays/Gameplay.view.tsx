import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useLogic } from "./Gameplay.logic";

export default function Gameplay() {
  const { data } = useLogic();
  return (
    <Slider {...data.settings} className=" w-1/4 max-sm:w-full">
      {data.data?.getAllGameplay.map((pic, i) => {
        return (
          <div key={i}>
            <Link to={`/${pic.slug}`}>
              <img src={`/${pic.thumb}`} alt={pic.thumb} className="h-56 " />
            </Link>
          </div>
        );
      })}
    </Slider>
  );
}
