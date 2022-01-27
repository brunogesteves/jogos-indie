import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeServices from "../../../Services/Home";

import "./GamePlays.css";

const Gameplay = () => {
  const [gameplays, setGameplays] = useState([]);

  useEffect(() => {
    HomeServices.gameplay().then((res) => {
      setGameplays(res);
    });
  }, []);

  return (
    <div className="gameplay">
      {gameplays &&
        gameplays.map((pic, i) => {
          return (
            <div key={i} className="gameplay-block">
              <div>
                <Link to={`/${pic.slug}`}>
                  <img src={`/${pic.thumb}`} alt={pic.thumb} />
                </Link>
              </div>
              <div className="gameplay-title">
                <Link to={`/${pic.slug}`}>
                  <span>{pic.name}</span>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Gameplay;
