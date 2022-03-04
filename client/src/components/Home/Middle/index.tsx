import React from "react";
import { Link } from "react-router-dom";

import "./Middle.css";

import { GET_ALL_POSTS_MIDDLE } from "../../../Graphql/Queries";
import { useQuery } from "@apollo/client";

interface MiddleInfo {
  name: string;
  thumb: string;
  slug: string;
}

interface MiddleData {
  getAllPostsHome: MiddleInfo[];
}

const Middle: React.FC = () => {
  const { data } = useQuery<MiddleData>(GET_ALL_POSTS_MIDDLE);

  return (
    <div className="middle-body">
      {data &&
        data.getAllPostsHome.map((res, i) => (
          <Link to={`${res.slug}`} key={i}>
            <img src={res.thumb} alt={res.name} />
          </Link>
        ))}
    </div>
  );
};

export default Middle;
