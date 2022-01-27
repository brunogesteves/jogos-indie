import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import HomeServices from "../../../Services/Home";

const Gallery = () => {
  const [thumb, setThumb] = useState([]);
  const [name, setName] = useState([]);
  const [slug, setSlug] = useState([]);

  useEffect(() => {
    HomeServices.gallery().then((res) => {
      setThumb(res.map((res) => res.thumb));
      setName(res.map((res) => res.name));
      setSlug(res.map((res) => res.slug));
    });
  }, []);

  return (
    <div className="gallery">
      {name.map((res, i) => (
        <div key={i}>
          <Link to={`${slug[i]}`}>
            <img src={thumb[i]} alt={res} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
