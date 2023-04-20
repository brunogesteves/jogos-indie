import React, { useState } from 'react';

import axios from 'axios';
import * as dotenv from 'dotenv';

export const useLogic = () => {
  const [visible, setVisible] = useState(false);
  const [file, setFile] = useState<string | Blob>('');

  function fileUpload(event) {
    setFile(event.target.files[0]);
  }

  function submit(event) {
    event.preventDefault();
    const url = `${process.env.REACT_APP_PUBLIC_URL}/upload/1.jpg`;
    const data = new FormData();
    data.append('file', file);
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    axios.post(url, data, options);
  }
  const adInformation = (name) => {
    return (
      <>
        <div className="flex justify-evenly mb-2  px-2 w-fill ">
          <img src={`/${name}.jpg`} alt="Logo" className="w-4/6" />
          <button
            className=" bg-red-500 rounded p-2 cursor-pointer text-white w-1/6"
            onClick={() => setVisible(true)}>
            Mude a Propaganda {name}
          </button>
        </div>

        {/* {visible ? (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
              <form
                method="post"
                encType="multipart/form-data"
                className="flex flex-col items-center justify-center">
                <input type="file" name="imagem" accept="image/*" onChange={fileUpload} />
                <input
                  type="button"
                  name="submit"
                  value="Enviar"
                  className=" bg-red-500 rounded p-2 cursor-pointer my-3 w-20"
                  onClick={submit}
                />
                <button
                  className=" bg-red-500 rounded p-2 cursor-pointer w-20"
                  onClick={() => setVisible(false)}>
                  Fechar
                </button>
              </form>
            </div>
          </>
        ) : null} */}
      </>
    );
  };
  return {
    methods: {
      adInformation
    }
  };
};
