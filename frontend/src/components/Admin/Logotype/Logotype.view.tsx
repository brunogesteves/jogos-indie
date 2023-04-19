import React, { useState } from 'react';

import axios from 'axios';
import * as dotenv from 'dotenv';

export default function Logotype() {
  const [file, setFile] = useState<string | Blob>('');
  const [visible, setVisible] = useState(false);

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

  return (
    <>
      <div className="flex justify-center flex-col">
        <img src={'/1.jpg'} alt="Logo" className="w-40" />
        <button className=" bg-red-500 rounded p-2 cursor-pointer" onClick={() => setVisible(true)}>
          Mude o logotipo
        </button>
      </div>
      {visible ? (
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
      ) : null}
    </>
  );
}
