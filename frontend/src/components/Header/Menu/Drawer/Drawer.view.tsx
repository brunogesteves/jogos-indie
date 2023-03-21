import React from "react";

import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { useLogic } from "./Drawer.logic";

export default function Drawer() {
  const { data, methods } = useLogic();

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Procurar"
          className="h-8 rounded-lg px-2"
          onChange={(e) => methods.setWord(e.target.value)}
        />

        <AiOutlineSearch
          className="ml-2"
          onClick={() => methods.toPageSearch()}
        />
      </div>
      <nav
        className={`fixed bg-red-500 h-screen top-0 right-0 w-1/2 z-10 shadow-md flex items-start transition transform duration-500 ease-in px-8 ${
          data.openDrawer === true ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <ul className="flex flex-col text-white gap-y-3 pt-3">
          <GrClose
            size={10}
            onClick={() => methods.setOpenDrawer(!data.openDrawer)}
          />
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Procurar"
              className="w-5/6 rounded-lg placeholder:text-xs placeholder:text-center placeholder:text-gray-300"
              onChange={(e) => methods.setWord(e.target.value)}
            />
            <AiOutlineSearch
              className="ml-2"
              color="#000"
              onClick={() => methods.toPageSearch()}
            />
          </div>
          {data.data?.getAllCategories.map((res, i) => (
            <Link
              to={`/categories/${res.name}`}
              key={i}
              className="uppercase mr-2"
            >
              {res.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
