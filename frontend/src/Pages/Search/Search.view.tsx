import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useLogic } from "./Search.logic";

export default function Search() {
  const { data, methods } = useLogic();

  return (
    <Container>
      <div className=" w-auto flex justify-start items-center my-2 flex-col h-auto">
        <p>Resultados com o termo "{data.value}"</p>
        <input
          type="text"
          placeholder="Procurar"
          className="placeholder:outline-none bg-red-400 placeholder:h-auto text-white  focus:outline-none h-7 rounded-lg w-52 px-2  my-4"
          onChange={(e) => methods.setSearchWord(e.target.value)}
          value={data.searchWord}
        />
      </div>
      <div className=" flex-wrap flex gap-3 ">
        {data.value !== "" &&
          data.data?.searchQuery.map((res, i) => {
            const { thumb, name, slug, category } = res;
            return (
              <div key={i} className="text-center">
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
          })}
      </div>
    </Container>
  );
}
