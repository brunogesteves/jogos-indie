import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

import "./Logotype.css";

export default function Logotype() {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState<string | Blob>("");

  function fileUpload(event) {
    setFile(event.target.files[0]);
  }

  function submit(event) {
    event.preventDefault();
    const url = `${process.env.PUBLIC_URL}/upload/1.jpg`;
    const data = new FormData();
    data.append("file", file);
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios.post(url, data, options);
  }

  return (
    <>
      <div className="logotype">
        <img src={"/1.jpg"} alt="Logo" />
        <Button variant="primary" onClick={() => setShow(true)}>
          Mude o logotipo
        </Button>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Upload Logo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Faça o upload do logotipo</p>
          <form method="post" encType="multipart/form-data">
            <input
              type="file"
              name="imagem"
              accept="image/*"
              onChange={fileUpload}
            />
            <input
              type="button"
              name="submit"
              value="Enviar"
              onClick={submit}
            />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
