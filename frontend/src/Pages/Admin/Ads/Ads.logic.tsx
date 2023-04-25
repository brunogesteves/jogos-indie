import React, { useState } from 'react';

import axios from 'axios';
import * as dotenv from 'dotenv';

export const useLogic = () => {
  const [fileName, setFileName] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [file, setFile] = useState<string | Blob>('');
  const [customStyles, setCustomStyles] = useState<any>({
    content: {
      top: '50%',
      left: '10%',
      right: '10%',
      bottom: '50%',
      width: 'auto',
      borderRadius: '10px',
      opacity: '0%',
      translate: '0% 0%',
      transiton: 'all .35s ease-in-out'
    }
  });

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

  function afterModalOpened() {
    setCustomStyles({
      content: {
        top: '25%',
        left: '10%',
        right: '10%',
        bottom: '25%',
        width: 'auto',
        borderRadius: '10px',
        opacity: '100%',
        translate: '0% 0%',
        overflowY: 'hidden',
        transition: 'all .35s ease-in-out'
      }
    });
  }

  function closeModal(name: string) {
    setFileName(name);
    setShowModal(false);
    setCustomStyles({
      content: {
        top: '50%',
        left: '10%',
        right: '10%',
        bottom: '50%',
        width: 'auto',
        borderRadius: '10px',
        opacity: '0%',
        translate: '0% 0%',
        transiton: 'all .35 ease-in-out'
      }
    });
  }

  const adInformation = (name: string) => {
    return (
      <>
        <div className="flex justify-evenly mb-2  px-2 w-fill ">
          <img src={`/${name}.jpg`} alt="Logo" className="w-4/6" />
          <button
            className=" bg-red-500 rounded p-2 cursor-pointer text-white w-1/6"
            onClick={() => setShowModal(true)}>
            Mude a Propaganda {name}
          </button>
        </div>
      </>
    );
  };
  return {
    data: {
      showModal,
      customStyles,
      fileName
    },
    methods: {
      adInformation,
      afterModalOpened,
      closeModal,
      setShowModal,
      setFileName
    }
  };
};
