import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import { useLogic } from "./ErrorPage.logic";

export default function ErrorPage() {
  const { data, methods } = useLogic();
  return (
    <>
      <div className="flex justify-center items-start font-semibold text-2xl mt-10">
        <div className="text-center">
          <p className="text-9xl ">OPS!</p>
          <p className="my-2 text-3xl">
            Não encontramos nenhuma página "{data.namePage}". tente novamente!!
          </p>

          <input
            type="text"
            value={data.searchWord}
            placeholder="Procurar"
            className="bg-red-300 rounded-lg px-2 placeholder:text-base"
            onChange={(e) => methods.setSearchWord(e.target.value)}
          />
          {data?.data &&
            data?.searchWord !== "" &&
            data?.data.searchPosts.map((res, i) => {
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
            })}
        </div>
        <div className="errorPage-sidebar"></div>
      </div>
    </>
  );
}
