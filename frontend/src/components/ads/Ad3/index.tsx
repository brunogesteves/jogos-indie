import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

import "./Ad3.css";

export default function Ad3() {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState<string | Blob>("");

  function fileUpload(event) {
    setFile(event.target.files[0]);
  }

  function submit(event) {
    event.preventDefault();
    const url = `${process.env.API_URL}}/upload/ad3.jpg`;
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
      <Button variant="primary" onClick={() => setShow(true)}>
        Mude a Propaganda 3
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Upload Ad
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Faça o upload da Propaganda</p>
          <form method="post" encType="multipart/form-data">
            <input
              type="file"
              name="imagem"
              accept=".jpg"
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
