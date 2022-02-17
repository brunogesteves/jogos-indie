import React from "react";
import { Link } from "react-router-dom";

import "./Middle.css";

import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS_MIDDLE } from "../../../Graphql/Queries";

export default function Middle() {
  const { data } = useQuery(GET_ALL_POSTS_MIDDLE);

  return (
    <div className="middle-body">
      {data &&
        data.getAllPostsHome.map((res, i) => (
          <Link to={`${res.slug}`} key={i}>
            <img src={res.thumb} alt={res} />
          </Link>
        ))}
    </div>
  );
}
