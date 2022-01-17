import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./SidebarFront.css";
import SidebarFrontService from "../../Services/SidebarFront";

export default function SidebarFront() {
  const [name, setName] = useState([]);
  const [images, setImages] = useState([]);
  const [slug, setSlug] = useState([]);

  useEffect(() => {
   SidebarFrontService.posts()
      .then((res) => {
        setName(res.map((res) => res.name));
        setSlug(res.map((res) => res.slug));
        setImages(res.map((res) => res.images));
      });
  }, []);

  return (
    <div className="sidebar-front-area">
      <Link to={"https://apoia.se/jogosindiebrasil"} target="_blank">
        <img src={"/crowdfunding.jpg"} alt="crowdfunding" />{" "}
      </Link>
      {name.map((res, i) => (
        <div key={i}>
          <Link to={`/${slug[i]}`}>
            <img src={images[i]} alt={res} />{" "}
          </Link>
        </div>
      ))}
    </div>
  );
}
