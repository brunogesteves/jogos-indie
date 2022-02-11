import React from "react";
import { Link } from "react-router-dom";

import "./Blocks.css";

import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS_MIDSECTION } from "../../../Graphql/Queries";

export default function Blocks() {
  const { data } = useQuery(GET_ALL_POSTS_MIDSECTION);

  return (
    <>
      <div className="home-blocks">
        {data &&
          data.getAllPostsHome.map((post, i) => {
            return (
              <div
                key={i}
                className={
                  i === 0 || i === 1 ? "home-block-post first-post" : "home-block-post others-post"
                }
              >
                <Link to={`/${post.slug}`}>
                  <div>
                    <img src={`/${post.thumb}`} alt={post.name} />
                  </div>
                </Link>
                <Link to={`/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div className={i === 0 ? "first-post-name" : "home-block-post-name"}>
                    {post.name}
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}
