import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ErrorPage.css";

import SidebarFront from "../../components/SidebarFront";

import { useQuery } from "@apollo/client";
import { SEARCH_POSTS } from "../../Graphql/Queries";

interface ErrorRouteProps {
  frontpage: string;
}

interface SearchInfo{
  name: string;
      category: string;
      slug: string;
      thumb: string;
}

interface SearchProps{
  searchPosts: SearchInfo[]
}

export default function ErrorPage() {
  const nameParams = useParams<ErrorRouteProps>();
  let namePage = nameParams.frontpage;

  const [searchWord, setSearchWord] = useState<string>("");

  const { data } = useQuery<SearchProps>(SEARCH_POSTS, { variables: { search: searchWord } });

  return (
    <>
      <div className="errorPage-body">
        <div className="errorPage-content">
          <div className="errorPage-warning">
            <p>OPS!</p>
            <p>Não encontramos nenhuma página "{namePage}". tente novamente!!</p>
          </div>
          <input
            type="text"
            placeholder="Procurar"
            className="search-content-input"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          {data &&
            searchWord !== "" &&
            data.searchPosts.map((res, i) => {
              const { name, category, slug, thumb } = res;
              return (
                <div key={i} className="errorPage-content-items">
                  <Link style={{ textDecoration: "none", color: "black" }} to={`/${slug}`}>
                    {name}
                  </Link>
                  <img src={thumb} alt={name} />
                  Categoria: {category}
                </div>
              );
            })}
        </div>
        <div className="errorPage-sidebar">
          <SidebarFront />
        </div>
      </div>
    </>
  );
}
