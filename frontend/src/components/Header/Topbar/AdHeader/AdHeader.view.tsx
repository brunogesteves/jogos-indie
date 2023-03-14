import React from "react";
import Slider from "react-slick";
import { useLogic } from "./AdHeader.logic";

// import "./AdHeader.css";

export default function AdHeader() {
  const { data } = useLogic();
  return (
    <div className="w-3/4   h-full max-sm:w-full ">
      <Slider {...data.settings}>
        <div className="w-full">
          <img
            alt={"1"}
            src={"/ad1.jpg"}
            className="object-cover h-auto w-full "
          />
        </div>
        <div className="h-auto">
          <img
            alt={"2"}
            src={"/ad2.jpg"}
            className="object-cover h-auto w-full"
          />
        </div>
        <div className="h-auto">
          <img
            alt={"3"}
            src={"/ad3.jpg"}
            className="object-cover h-auto w-full"
          />
        </div>
      </Slider>
    </div>
  );
}
