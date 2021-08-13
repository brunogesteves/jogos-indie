import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBarFront from "../../../Components/SidebarFront/SidebarFront";

import "./Blocks.css";
import Category from "../../../Services/Category";

export default function Blocks() {
  const [blocks, setBlocks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Category.random().then((res) => {
      setBlocks(res);
      setLoaded(true);
    });
  }, []);

  return loaded ? (
    <>
      <div className="home-blocks">
        {blocks.map((block, i) => {
          return (
            <div key={i} className="home-block">
              <h2>{block.name}</h2>
              {block.posts.map((post, i) => {
                return (
                  <div
                    key={i}
                    className={
                      i === 0
                        ? "home-block-post first-post"
                        : "home-block-post others-post"
                    }
                  >
                    <Link to={`/${post.slug}`}>
                      <div>
                        <img src={`/${post.images}`} alt={post.name} />
                      </div>
                    </Link>
                    <Link
                      to={`/${post.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className={
                          i === 0 ? "first-post-name" : "home-block-post-name"
                        }
                      >
                        {post.name}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="home-blocks-sidebar">
        <SideBarFront />
        <div className="adsense"></div>
      </div>
    </>
  ) : null;
}
