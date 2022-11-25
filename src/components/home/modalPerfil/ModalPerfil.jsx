import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../../api/Rule_API";
import "./modal.css";
import { useEffect } from "react";
import { getUsuario } from "../../../api/Rule_auth";

function ModalPerfil({ show, handleClose }) {
  const [idUsuario, setIdUsuario] = useState();

  const consultarUsuario = async () => {
    await getUsuario()
      .then((response) => {
        setIdUsuario(response.id);
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    consultarUsuario();
  }, []);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Info de perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {idUsuario && (
          <img
            src={`http://localhost:8000/api/user/photo/${idUsuario}`}
            alt="foto usuario"
            height={250}
          ></img>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPerfil;
