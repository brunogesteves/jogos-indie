import React, { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useDropzone, FileRejection, FileError } from 'react-dropzone';
import { FILE_UPLOAD } from '../../../../Graphql/Mutations';
import SingleFileUploadProgress from './SingleFileUploadProgress';

interface UploadableFile {
  file: File;
  errors: FileError[];
  url?: string;
}

// export default function UploadImage({ fileName }) {
//   const [files, setFiles] = useState<SetStateAction<UploadableFile[]>>([]);
//   const [imageSent, setImageSent] = useState<any>([]);
//   const [uploadFile, { data }] = useMutation(FILE_UPLOAD);

//   const { getRootProps, getInputProps, open } = useDropzone({
//     maxFiles: 1,
//     accept: {
//       'image/*': ['.png']
//     },
//     noClick: true,
//     noKeyboard: true,
//     onDrop: (accFiles: File[], rejFiles: FileRejection[]) => {
//       const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
//       setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
//     }
//   });

//   // const thumbs = files.map((file, i) => (
//   //   <div className="rounde-lg border-black m-0 w-[100px] h-100 p-4" key={i}>
//   //     <div className="flex min-w-0 overflow-hidden">
//   //       <img
//   //         src={file.preview}
//   //         className="block w-auto h-full"
//   //         // Revoke data uri after image is loaded
//   //         onLoad={() => {
//   //           URL.revokeObjectURL(file.preview);
//   //         }}
//   //       />
//   //     </div>
//   //   </div>
//   // ));

//   // useEffect(() => {
//   //   // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
//   //   return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
//   // }, []);

//   // const handleFile = (e: any) => {
//   //   setFiles(e.target.files[0]);
//   // };

//   // console.log(imageSent);

// return (
//     <section className="flex justify-center items-center flex-col text-center">
//       <div {...getRootProps({ className: 'dropzone' })}>
//         <input
//           {...getInputProps({
//             // onChange: handleFile
//           })}
//         />
//         <p className="mb-4">Arraste o arquivos desejado ou</p>
//         <button
//           type="button"
//           onClick={open}
//           className="bg-gray-500 w-auto py-1 px-6 text-white rounded-lg">
//           Abrir Foto
//         </button>
//       </div>
//       {files.map((fileWrapper) => {})}
//       <aside className="flex flex-row flex-wrap mt-4">{'thumbs'}</aside>
//       {files.length ? (
//         <button
//           className="bg-red-500 w-auto py-1 px-6 text-white rounded-lg"
//           onClick={() => {
//             uploadFile({ variables: { file: files } });
//           }}>
//           Enviar
//         </button>
//       ) : (
//         ''
//       )}
//     </section>
//   );
// }

// export default function UploadImage({ fileName }) {
//   const [files, setFiles] = useState<UploadableFile[]>([]);
//   const [uploadFile] = useMutation(FILE_UPLOAD);

//   const { getRootProps, getInputProps } = useDropzone({
//     maxFiles: 1,
//     accept: {
//       'image/*': ['.png']
//     },
//     // noClick: true,
//     // noKeyboard: true,
//     onDrop: (accFiles: File[], rejFiles: FileRejection[]) => {
//       const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
//       setFiles((curr: any) => [...curr, ...mappedAcc, ...rejFiles]);
//     }
//   });

//   function onDelete(file: File) {
//     setFiles((curr) => curr.filter((fw) => fw.file !== file));
//   }

//   function onUpload(file: File, url: string) {
//     // setFiles((curr) =>
//     //   curr.filter((fw) => {
//     //     if (fw.file === file) {
//     //       return { ...fw, url };
//     //     }
//     //     return fw;
//     //   })
//     // );
//     uploadFile({
//       onCompleted: (data) => console.log('front-upload:', data),
//       variables: { input: { file: file, fileName: url } }
//     });
//   }

//   return (
//     <>
//       <div {...getRootProps({ className: 'dropzone' })}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       {JSON.stringify(files)}
//       {files.map((fileWrapper: { file: File }, i: number) => {
//         return (
//           <SingleFileUploadProgress
//             onDelete={onDelete}
//             onUpload={onUpload}
//             key={i}
//             file={fileWrapper.file}
//           />
//         );
//       })}
//     </>
//   );
// }

export default function UploadImage({ fileName }) {
  const [uploadFile] = useMutation(FILE_UPLOAD);
  // const onDrop = useCallback(
  //   ([file]) => {
  //     console.log(file);

  //     uploadFile({
  //       onCompleted: (data) => console.log(data),

  //       variables: { input: file }
  //     });
  //   },
  //   [uploadFile]
  // );
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (files) => {
      console.log(files[0]);

      uploadFile({
        onCompleted: (data) => console.log(data),

        variables: { input: files[0] }
      });
    }
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
