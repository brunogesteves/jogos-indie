import React from "react";
import { Link } from "react-router-dom";

import "./GamePlays.css";

import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS_GAMEPLAY } from "../../../Graphql/Queries";

export default function Gameplay() {
  const { data } = useQuery(GET_ALL_POSTS_GAMEPLAY);

  return (
    <div className="gameplay">
      {data &&
        data.getAllPostsHome.map((pic, i) => {
          return (
            <div key={i} className="gameplay-block">
              <div>
                <Link to={`/${pic.slug}`}>
                  <img src={`/${pic.thumb}`} alt={pic.thumb} />
                </Link>
              </div>
              <div className="gameplay-title">
                <Link to={`/${pic.slug}`} style={{ textDecoration: "none", color: "black" }}>
                  <span>{pic.name}</span>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}
