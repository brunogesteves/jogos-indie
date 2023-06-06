import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { FILE_UPLOAD } from '../../../Graphql/Mutations';
import { useDropzone } from 'react-dropzone';

export const useLogic = () => {
  const [fileName, setFileName] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
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
  const [nameAd, setNameAd] = useState<string>('');
  const [files, setFiles] = useState<any[]>([]);

  const [uploadFile] = useMutation(FILE_UPLOAD);

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
          <img
            src={`${process.env.REACT_APP_API_URL_FILES}/${name}.png`}
            alt="Logo"
            className="w-4/6"
          />
          <button
            className=" bg-red-500 rounded p-2 cursor-pointer text-white w-1/6"
            onClick={() => {
              setShowModal(true);
              setNameAd(name);
            }}>
            Mude a Propaganda {name}
          </button>
        </div>
      </>
    );
  };

  const thumbs = files.map((file) => (
    <img
      key={file.preview}
      src={file.preview}
      alt="preview"
      className="flex justify-center w-12 mb-3"
      onLoad={() => {
        URL.revokeObjectURL(file.preview);
      }}
    />
  ));

  function nameLengthValidator(file: any) {
    if (file.size > 14000) {
      return {
        code: 'name-too-large',
        message: 'arquivo grande'
      };
    }

    return null;
  }

  const { getRootProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    validator: nameLengthValidator,
    accept: {
      'image/png': []
    },
    onDrop: async (files: any) => {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          uploadFile({
            variables: {
              input: {
                db: false,
                base64: reader.result,
                name: `${nameAd}.png`
              }
            },
            onCompleted: () => {
              // thumbName(file.name);
              // setMessage(true);
            }
          });
        };
        reader.readAsDataURL(file);

        setFiles([]);
        setFiles(
          files.map((file: any) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        );
      }
    }
  });
  return {
    data: {
      showModal,
      customStyles,
      fileName,
      thumbs,
      nameAd
    },
    methods: {
      adInformation,
      afterModalOpened,
      closeModal,
      setShowModal,
      setFileName,
      getRootProps,
      open
    }
  };
};
