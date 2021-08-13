import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Auth from "../../Services/Auth";

export default function SignIn(props) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassWord] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function verifyLogin() {
    Auth.authenticate(user, password)
      .then((res) => {
        sessionStorage.setItem("token", res.token);
        sessionStorage.setItem("user", res.name);
      })
      .catch((error) => {
        console.log("Erro na volta");
      });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Entrar na área de administração
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={verifyLogin}>
            Entrar
          </Button>
          <Button variant="secondary">Fechar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
