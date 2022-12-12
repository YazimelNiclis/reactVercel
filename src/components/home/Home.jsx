import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";
import "./home.css";
import ModalForm from "./modal/ModalForm";
import ModalTelefono from "./modalTel/modalTelefono";
import ModalPerfil from "./modalPerfil/ModalPerfil";
import { consultarUsuarios, isAuth } from "../../api/Rule_auth";
import { obtenerTelefonos } from "../../api/Rule_telefonos";

function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [telefonos, setTelefonos] = useState([]);
  const [handleModalFormUser, setHandleModalFormUser] = useState(false);
  const [handleModalFormTelefono, setHandleModalFormTelefono] = useState(false);
  const [handleModalFormPerfilImagen, setHandleModalFormPerfilImagen] =
    useState(false);
  const navigate = useNavigate();

  const buscarUsuarios = async () => {
    await consultarUsuarios()
      .then((response) => {
        setUsuarios(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  /*   const onClickTelefonos = async () => {
    await obtenerTelefonos()
      .then((response) => {
        setTelefonos(response);
      })
      .catch((error) => {
        alert(error);
      });
  }; */

  useEffect(() => {
    if (!isAuth()) {
      navigate("../");
      return;
    }
    buscarUsuarios();
  }, []);

  return (
    <div>
      <ModalForm
        show={handleModalFormUser}
        handleClose={() => {
          setHandleModalFormUser(false);
        }}
      />

      <ModalTelefono
        show={handleModalFormTelefono}
        handleClose={() => {
          setHandleModalFormTelefono(false);
        }}
      />

      <ModalPerfil
        show={handleModalFormPerfilImagen}
        handleClose={() => {
          setHandleModalFormPerfilImagen(false);
        }}
      />
      <nav className="nav">
        <ul className="nav-list">
          {/* ---------------Lista de usuarios--------------- */}
          <li className="nav-item">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Lista de usuarios</Accordion.Header>
                <Accordion.Body>
                  {usuarios &&
                    usuarios.map((usuario) => {
                      return (
                        <div key={usuario.id}>
                          <p>{usuario.email}</p>
                        </div>
                      );
                    })}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </li>
          <li className="nav-item">
            {/* ---------------Registrar un nuevo usuario--------------- */}
            <Button
              variant="outline-dark"
              onClick={() => {
                setHandleModalFormUser(true);
              }}
            >
              Registrar un usuario
            </Button>
          </li>
          {/* ---------------Lista de telefono--------------- */}
          {/*  <li className="nav-item">
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={onClickTelefonos}>
                  Lista de telefonos
                </Accordion.Header>
                <Accordion.Body>
                  {telefonos.listaClientes?.length &&
                    telefonos.listaClientes.map((usuario) => {
                      return (
                        <div key={usuario.clienteid}>
                          <p>{usuario.cedula_ruc}</p>
                        </div>
                      );
                    })}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </li> */}
          {/* ---------------Registrar un nuevo telefono--------------- */}
          <li className="nav-item">
            <Button
              variant="outline-dark"
              onClick={() => {
                setHandleModalFormTelefono(true);
              }}
            >
              Agregar un telefono
            </Button>
          </li>
          <li className="nav-item">
            <Button
              variant="outline-dark"
              onClick={() => {
                setHandleModalFormPerfilImagen(true);
              }}
            >
              Ver perfil con imagen
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
