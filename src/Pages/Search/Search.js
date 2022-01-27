import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "./Search.css";

import SidebarFront from "../../Components/SidebarFront/SidebarFront";
import { SearchContext } from "../Contexts/Context";
import PostsServices from "../../Services/Posts";

export default function Search() {
  const { searchWord, setSearchWord } = useContext(SearchContext);
  const [result, setResult] = useState([]);

  // const searchVal = word;

  useEffect(() => {
    PostsServices.search(searchWord).then((res) => {
      setResult(res);
    });
    // eslint-disable-next-line
  }, [searchWord]);

  return (
    <>
      <div className="search-area">
        <div className="search-content">
          <input
            type="text"
            placeholder="Procurar"
            className="search-content-input"
            onChange={(e) => setSearchWord(e.target.value)}
            value={searchWord}
          />
          Termo buscado é "{searchWord}"
          {searchWord
            ? result.map((res, i) => {
                const { thumb, name, slug, category } = res;
                return (
                  <div key={i} className="search-content-items">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/${slug}`}
                    >
                      {name}
                    </Link>
                    <Link to={`/${slug}`}>
                      <img src={thumb} alt={name} />
                    </Link>
                    Categoria: {category}
                  </div>
                );
              })
            : null}
        </div>
        <div className="search-sidebar">
          <SidebarFront />
        </div>
      </div>
    </>
  );
}
