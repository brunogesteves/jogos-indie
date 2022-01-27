import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ErrorPage.css";

import SidebarFront from "../../Components/SidebarFront/SidebarFront";
import PostsServices from "../../Services/Posts";

export default function ErrorPage() {
  const nameParams = useParams();
  let namePage = nameParams.frontpage;

  const [result, setResult] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    PostsServices.search(searchWord).then((res) => {
      setResult(res);
    });
    // eslint-disable-next-line
  }, [searchWord]);

  console.log("res: ", result);

  return (
    <>
      <div className="errorPage-body">
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
                const { name, category, slug, thumb } = res;
                return (
                  <div key={i} className="errorPage-content-items">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/${slug}`}
                    >
                      {name}
                    </Link>
                    <img src={thumb} alt={name} />
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
