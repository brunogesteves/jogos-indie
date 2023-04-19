import React, { useState } from "react";

// import "react-dropzone-uploader/dist/styles.css";
import "./FileDrop.css";
import { FILE_UPLOAD } from "../../../../Graphql/Mutations";
import { useMutation } from "@apollo/client";

export default function UploadImage({ fileName }) {
  // const [file, setFile] = useState<any>();

  // const [fileName, setFileName] = useState<string>("");
  // const [uploadedFile, setUploadedFile] = useState<string>("");
  const [preview, setPreview] = useState<string | ArrayBuffer | null>();
  // const [response, setResponse] = useState("");
  // const [uploadPercentage, setUploadPercentage] = useState();

  // function onChange(e) {
  //   setFile(e.target.files[0]);
  //   setFileName(e.target.files[0].name);
  // }

  // const [uploadImage, { data: fileUploadData }] = useMutation(UPLOAD_IMAGE, {
  //   onCompleted: (data) => {
  //     console.log(data);
  //     if (data.fileUpload?.success) {
  //       alert(data.fileUpload?.message);
  //       setResponse(data.fileUpload?.message);
  //     }
  //   },
  // });

  // async function uploadFile() {
  //   if (!file) {
  //     return;
  //   }

  //   // let data = {
  //   //   file:e.target.files[0],
  //   // }
  //   uploadImage({
  //     variables: file,
  //   });
  // }
  // const [response, setResponse] = useState("");

  // const [fileUpload, { data }] = useMutation(FILE_UPLOAD, {
  //   onError: (err) => {
  //     console.log(err);
  //     setResponse(err.message);
  //   },
  //   onCompleted: (data) => {
  //     console.log(data);
  //     if (data.fileUpload?.success) {
  //       alert(data.fileUpload?.message);
  //       setResponse(data.fileUpload?.message);
  //     }
  //   },
  // });

  // console.log(data);

  const uploadFile = (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files?.[0];
    fileName(e.target.files?.[0].name);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
      // setFileName(file.name);
    };
    // let data = {
    //   file: e.target.files[0],
    // };
    // fileUpload({
    //   variables: data,
    // });
  };

  return (
    <>      
      <div className=" flex justify-center items-start">
        <input
          type="file"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            // setUploadedFile(event.target.files?.[0].name);
            uploadFile(event);
          }}
        />
        <img src={`${preview}`} alt="preview" className="w-40" />
      </div>
    </>
  );
}
