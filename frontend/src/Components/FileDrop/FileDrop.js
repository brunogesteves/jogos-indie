import React, { useState } from "react";

import axios from "axios";
// import "react-dropzone-uploader/dist/styles.css";
import "./FileDrop.css";
import { base_url } from "../../config";

export default function FileDrop(props) {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState();

  function onChange(e) {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  async function uploadFile(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    try {
      const res = await axios.post(`${base_url}/images`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
          setTimeout(() => {
            setUploadPercentage(0);
          }, 10000);
        },
      });
      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
      setMessage("Foto Adicionada");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("erro no servidor");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  }

  return (
    <>
      <div class="mb-3">
        {message ? message : null}
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={onChange}
        />
        <label className="form-label" htmlFor="formFile">
          {fileName ? fileName : "Selecione um arquivo"}
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
          style={{ width: `${uploadPercentage}%` }}
          role="progressbar"
        ></div>
      </div>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto ">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      ) : null}
    </>
  );
}
