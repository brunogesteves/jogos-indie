import React, { useState } from "react";

// import "react-dropzone-uploader/dist/styles.css";
import "./FileDrop.css";
import { FILE_UPLOAD } from "../../Graphql/Mutations";
import { useMutation } from "@apollo/client";

export default function FileDrop(props) {
  // const [file, setFile] = useState("");
  // const [fileName, setFileName] = useState("");
  // const [uploadedFile, setUploadedFile] = useState({});
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
  const [response, setResponse] = useState("");

  const [fileUpload, { data }] = useMutation(FILE_UPLOAD, {
    onError: (err) => {
      console.log(err);
      setResponse(err.message);
    },
    onCompleted: (data) => {
      console.log(data);
      if (data.fileUpload?.success) {
        alert(data.fileUpload?.message);
        setResponse(data.fileUpload?.message);
      }
    },
  });

  console.log(data);

  const uploadFile = (e) => {
    if (!e.target.files) {
      return;
    }

    let data = {
      file: e.target.files[0],
    };
    fileUpload({
      variables: data,
    });
  };

  return (
    <>
      <div class="mb-3">
        <input type="file" name="file[]" id="file" onChange={uploadFile} />
        {response ? response : null}
        {/* <input className="form-control" type="file" id="formFile" onChange={onChange} /> */}
        <label className="form-label" htmlFor="formFile">
          {/* {fileName ? fileName : "Selecione um arquivo"} */}
        </label>
        <input
          type="submit"
          value="Adicionar"
          class="btn btn-primary btn-block mt-4 col-12"
          onClick={uploadFile}
        />
      </div>
      <div class="progress">
        <div
          class="progress-bar"
          // style={{ width: `${uploadPercentage}%` }}
          role="progressbar"
        ></div>
      </div>
      {/* {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto ">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      ) : null} */}
    </>
  );
}
