import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useLogic } from "./Menubar.logic";

export default function MenuBar() {
  const { data, methods } = useLogic();
  return (
    <div className="flex bg-red-500  py-4 justify-between items-center px-6 max-lg:hidden">
      <div className=" text-white ">
        <Link to="/" className="uppercase mr-2">
          HOME
        </Link>
        <Link to="/procurar" className="uppercase mr-2">
          PROCURAR
        </Link>
        {data.data?.getAllCategories.map((res, i) => (
          <Link
            to={`/categories/${res.name}`}
            key={i}
            className="uppercase mr-2"
          >
            {res.name}
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Procurar"
          className="h-8 rounded-lg px-2 "
          onChange={(e) => methods.setWord(e.target.value)}
        />

        <AiOutlineSearch
          className="ml-2"
          onClick={() => methods.toPageSearch()}
        />
      </div>
    </div>
  );
}
