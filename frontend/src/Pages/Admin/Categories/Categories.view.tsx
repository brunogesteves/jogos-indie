import React from "react";
import Admin from "../../../components/Admin/Admin.view";

import { AiTwotoneDelete } from "react-icons/ai";
import { useLogic } from "./Categories.logic";

export default function Categories(props) {
  const { data, methods } = useLogic();

  return (
    <Admin>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col gap-y-2">
          Digite a nova categoria:
          <input
            type="text"
            name="name"
            value={data.wordInput}
            className="placeholder:bg-gray-100 rounded border-0 bg-red-100 focus:outline-none px-2"
            onChange={(e) => (e ? methods.setWordInput(e.target.value) : null)}
          />
        </div>
        <button
          // onClick={
          //   wordInput
          //     ? () => {
          //         createCategory({ variables: { name: wordInput } });
          //         setWordInput("");
          //       }
          //     : null
          // }
          className="bg-red-500 w-auto p-2 mt-2 rounded text-white"
        >
          Adicionar
        </button>

        {data.data?.getAllCategories.map((res, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center mt-6 text-capitalize w-56"
            >
              {res.name.toUpperCase()}
              <button
                onClick={() => {
                  methods.deleteCategory({ variables: { id: res.id } });
                }}
              >
                <AiTwotoneDelete color="red" />
              </button>
            </div>
          );
        })}
      </div>
    </Admin>
  );
}
