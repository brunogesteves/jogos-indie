import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Middle.css";
import HomeServices from "../../../Services/Home";

const NewGame = () => {
  const [thumb, setThumb] = useState([]);
  const [name, setName] = useState([]);
  const [slug, setSlug] = useState([]);

  useEffect(() => {
    HomeServices.middle().then((res) => {
      setThumb(res.map((res) => res.thumb));
      setName(res.map((res) => res.name));
      setSlug(res.map((res) => res.slug));
    });
  }, []);

  return (
    <div className="topHome">
      {name.map((res, i) => (
        <Link to={`${slug[i]}`} key={i}>
          <img src={thumb[i]} alt={res} />
        </Link>
      ))}
    </div>
  );
};

export default NewGame;
