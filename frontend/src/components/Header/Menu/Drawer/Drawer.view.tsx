import React from "react";

import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useLogic } from "./Drawer.logic";

export default function Drawer() {
  const { data, methods } = useLogic();

  return (
    <div className="relative">
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
