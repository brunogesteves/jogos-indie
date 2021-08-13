import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./MenuBar.css";

import Menu from "../../../../../Services/Menu";

export default function MenuBar() {
  const [menu, setMenu] = useState([""]);

  useEffect(() => {
    Menu.menu().then((res) => {
      setMenu(res.map((res) => res.name));
    });
  }, []);

  return (
    <div className="menu">
      <Link to="/" className="menu-item">
        Home
      </Link>
      <Link to="/procurar" className="menu-item">
        Procurar
      </Link>
      {menu.map((res, i) => (
        <Link to={`/categories/${res}`} key={i} className="menu-item">
          {res}
        </Link>
      ))}
    </div>
  );
}
