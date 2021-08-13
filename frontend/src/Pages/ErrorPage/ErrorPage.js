import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./ErrorPage.css";

import SidebarFront from "../../Components/SidebarFront/SidebarFront";
import { SearchContext } from "./../Contexts/Context";
import searchPost from "../../Services/Search";

export default function ErrorPage() {
  const nameParams = useParams();
  let namePage = nameParams.frontpage;

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
      <div className="errorPage-area">
        <div className="errorPage-content">
          <div className="errorPage-warning">
            <p>OPS!</p>
            <p>
              Não encontramos nenhuma página "{namePage}". tente novamente!!
            </p>
          </div>
          <input
            type="text"
            placeholder="Procurar"
            className="search-content-input"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          {searchWord
            ? result.map((res, i) => {
                const { images, name, slug, category } = res;
                return (
                  <div key={i} className="errorPage-content-items">
                    <Link to={`/${slug}`}>{name}</Link>
                    <img src={images} alt={name} />
                    Categoria: {category}
                  </div>
                );
              })
            : null}
        </div>
        <div className="errorPage-sidebar">
          <SidebarFront />
        </div>
      </div>
    </>
  );
}
