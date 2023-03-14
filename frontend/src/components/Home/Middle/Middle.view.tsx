import React from "react";
import { Link } from "react-router-dom";
import { useLogic } from "./Middle.Logic";

const Middle: React.FC = () => {
  const { data } = useLogic();
  return (
    <div className="h-auto gap-3 w-1/4 px-2 max-sm:w-full ">
      {data.data?.getAllMiddle.map((res, i) => (
        <Link to={`${res.slug}`} key={i}>
          <img src={res.thumb} alt={res.name} className="h-56 w-full mt-1" />
        </Link>
      ))}
    </div>
  );
};

export default Middle;
