import React, { CSSProperties, useEffect, useState } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { AiFillDelete } from 'react-icons/ai';

interface SingleFileUploadProgressProps {
  file: File;
  onDelete: (file: File) => void;
  onUpload: (file: File, url: string) => void;
}

export default function SingleFileUploadProgress({
  file,
  onDelete,
  onUpload
}: SingleFileUploadProgressProps) {
  const override: CSSProperties = {
    display: 'block',
    margin: 'auto',
    borderColor: 'red'
  };
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    async function upload() {
      const url = await uploadFile(file, setProgress);
      onUpload(file, url);
    }
    upload();
  }, []);
  return (
    <>
      <div>progress: {progress}</div>
      <AiFillDelete onClick={() => onDelete(file)} />

      <BarLoader
        color="red"
        loading={true}
        cssOverride={override}
        width={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}

function uploadFile(file: File, onProgress: (percentage: number) => void) {
  const url = 'POST http://localhost:4000/graphql';
  return new Promise<string>((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    xhr.onload = () => {
      res('url where you save the file');
    };
    xhr.onerror = (evt) => rej(evt);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentage));
      }
    };

    const formData = new FormData();
    formData.append('file', file);
    xhr.send(formData);
  });
}
