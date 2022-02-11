import React, { useContext } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "./Search.css";

import SidebarFront from "../../Components/SidebarFront";
import { InfoContext } from "../../Contexts/Context";

import Container from "../../Components/Container";
import { useQuery } from "@apollo/client";
import { SEARCH_POSTS } from "../../Graphql/Queries";

export default function Search() {
  const { searchWord, setSearchWord } = useContext(InfoContext);

  const { data } = useQuery(SEARCH_POSTS, { variables: { search: searchWord } });
  return (
    <Container>
      <div className="search-area">
        <div className="search-content">
          <input
            type="text"
            placeholder="Procurar"
            className="search-content-input"
            onChange={(e) => setSearchWord(e.target.value)}
            value={searchWord}
          />
          {searchWord !== "" ? `Termo buscado é "${searchWord}"` : ""}
          {data &&
            searchWord !== "" &&
            data.searchPosts.map((res, i) => {
              const { thumb, name, slug, category } = res;
              return (
                <div key={i} className="search-content-items">
                  <Link style={{ textDecoration: "none", color: "black" }} to={`/${slug}`}>
                    {name}
                  </Link>
                  <Link to={`/${slug}`}>
                    <img src={thumb} alt={name} />
                  </Link>
                  Categoria: {category}
                </div>
              );
            })}
        </div>
        <div className="search-sidebar">
          <SidebarFront />
        </div>
      </div>
    </Container>
  );
}
