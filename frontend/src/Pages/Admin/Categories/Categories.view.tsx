import React from 'react';
import Admin from '../../../components/Admin/AdminLayout.view';

import { AiTwotoneDelete } from 'react-icons/ai';
import { useLogic } from './Categories.logic';

export default function Categories() {
  const { data, methods } = useLogic();

  return (
    <Admin>
      <div className="h-screen py-2 text-center ">
        Digite a nova categoria:
        <div className="flex justify-center gap-x-2 items-start mt-2">
          <div>
            <input
              type="text"
              name="name"
              value={data.wordInput}
              className="placeholder:bg-gray-500 text-red-500 rounded border-0  focus:outline-none px-2"
              onChange={(e) => methods.setWordInput(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={() =>
                methods.createCategory({ variables: { newCategoryName: data.wordInput } })
              }
              className="bg-red-500 w-auto px-2 rounded text-white">
              Adicionar
            </button>
          </div>
        </div>
        {data.data?.getAllCategories.map((res: { id: number; name: string }, index: number) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center mt-6 text-capitalize w-full ">
              {res.name.toUpperCase()}
              <button
                onClick={() => {
                  methods.deleteCategory({ variables: { deleteCategoryId: res.id } });
                }}>
                <AiTwotoneDelete color="red" />
              </button>
            </div>
          );
        })}
      </div>
    </Admin>
  );
}
