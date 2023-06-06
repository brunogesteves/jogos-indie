import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useDropzone } from 'react-dropzone';
import { FILE_UPLOAD } from '../../../../Graphql/Mutations';

export default function UploadImages({ thumbName }) {
  const [message, setMessage] = useState<boolean>(false);
  const [files, setFiles] = useState<any[]>([]);
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
                saveToDB: true,
                base64: reader.result,
                name: file.name
              }
            },
            onCompleted: () => {
              thumbName(file.name);
              setMessage(true);
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

  return (
    <div className="flex justify-center items-center  py-5">
      <div {...getRootProps({ className: 'dropzone' })}>
        {!!thumbs ? (
          thumbs
        ) : (
          <img
            src="/nothumbnail.png"
            className="flex justify-center w-4/4 mb-3"
            alt="nothumbnail"
          />
        )}

        <button
          type="button"
          onClick={open}
          className="bg-[#c9c9cc] border-2 border-black p-1 my-3 elevation-5 w-40">
          Escolher uma foto
        </button>
        {message ? <p>Foto adicionada ao post</p> : null}
      </div>
    </div>
  );
}
