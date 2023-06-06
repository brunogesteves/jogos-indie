import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/client';
import { FILE_UPLOAD } from '../../../Graphql/Mutations';

export default function Logotype() {
  const [files, setFiles] = useState<any[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [logotype, setLogotype] = useState(`${process.env.REACT_APP_API_URL_FILES}/logotype.png`);

  const [uploadFile] = useMutation(FILE_UPLOAD);

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

  const { getRootProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    validator: nameLengthValidator,
    accept: {
      'image/png': []
    },
    onDrop: () => {
      const file = acceptedFiles[0];
      if (file) {
        setLogotype('');

        const reader = new FileReader();
        reader.onload = () => {
          uploadFile({
            variables: {
              input: {
                saveToDB: false,
                base64: reader.result,
                name: 'logotype.png'
              }
            },
            onCompleted: () => {
              setLogotype(
                `${process.env.REACT_APP_API_URL_FILES}/logotype.png?cache=${new Date().valueOf()}`
              );
            }
          });
        };
        reader.readAsDataURL(file);

        setFiles([]);
        setFiles(
          acceptedFiles.map((file: any) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        );
      }
    }
  });

  return (
    <>
      <div className="flex justify-center flex-col">
        <img src={logotype} alt="Logo" className="w-40" />
        <button className=" bg-red-500 rounded p-2 cursor-pointer" onClick={() => setVisible(true)}>
          Mude o logotipo
        </button>
      </div>
      <Transition.Root show={visible} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setVisible(false);
          }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="flex justify-center items-center bg-red-500 py-5">
                    <div {...getRootProps({ className: 'dropzone' })}>
                      {thumbs.length !== 0 ? (
                        thumbs
                      ) : (
                        <img
                          src={logotype}
                          alt="logotype"
                          className="flex justify-center w-4/4 mb-3"
                        />
                      )}

                      <button
                        type="button"
                        onClick={open}
                        className="bg-[#c9c9cc] border-[1px] rounded-lg border-black p-1 my-3 elevation-5 w-44">
                        Escolher uma foto
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
