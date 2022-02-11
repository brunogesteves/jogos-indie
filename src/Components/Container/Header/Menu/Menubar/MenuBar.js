import React from "react";
import { Link } from "react-router-dom";

import "./MenuBar.css";

import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../../../../Graphql/Queries";

export default function MenuBar() {
  const { data } = useQuery(GET_ALL_CATEGORIES);

  return (
    <div className="menu">
      <Link to="/" className="menu-item">
        HOME
      </Link>
      <Link to="/procurar" className="menu-item">
        PROCURAR
      </Link>
      {data &&
        data.getAllCategories.map((res, i) => (
          <Link to={`/categories/${res.name}`} key={i} className="menu-item">
            {res.name}
          </Link>
        ))}
    </div>
  );
}
