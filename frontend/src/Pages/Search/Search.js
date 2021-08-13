import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "./Search.css";

import SidebarFront from "../../Components/SidebarFront/SidebarFront";
import { SearchContext } from "../Contexts/Context";
import searchPost from "../../Services/Search";

export default function Search() {
  const { searchWord, setSearchWord } = useContext(SearchContext);
  const [result, setResult] = useState([]);

  // const searchVal = word;

  useEffect(() => {
    searchPost.search(searchWord).then((res) => {
      setResult(res);
    });
    // eslint-disable-next-line
  }, [searchWord]);

  // const data = { searchVal };
  // const makeSearch = () => {
  //   const options = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   axios
  //     .post(`http://localhost:3002/posts/search`, JSON.stringify(data), options)
  //     .then(({ data }) => {
  //       setResult(data);
  //     });
  // };
  // makeSearch();

  return (
    <>
      <div className="search-area">
        <div className="search-content">
          <input
            type="text"
            placeholder="Procurar"
            className="search-content-input"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          Termo buscado é "{searchWord}"
          {searchWord
            ? result.map((res, i) => {
                const { images, name, slug, category } = res;
                return (
                  <div key={i} className="search-content-items">
                    <Link to={`/${slug}`}>{name}</Link>
                    <Link to={`/${slug}`}>
                      <img src={images} alt={name} />
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
