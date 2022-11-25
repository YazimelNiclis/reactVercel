import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import "./modal.css";
import { agregarTelefonos } from "../../../api/Rule_telefonos";

function ModalTelefono({ show, handleClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await agregarTelefonos(data)
      .then(() => {
        alert("Telefono creado correctamente");
        handleClose();
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar un nuevo usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="modalForm" onSubmit={handleSubmit(onSubmit)}>
          {/* ---------------Email--------------- */}
          <label htmlFor="Id" className="item">
            <br />
            <h5>Id *</h5>
            <input
              placeholder="Id*"
              {...register("id", {
                required: true,
              })}
            />

            {errors.id?.type === "required" && <div>Id is required</div>}
          </label>
          <br />
          {/* ---------------Password--------------- */}
          <label htmlFor="Nombre" className="item">
            <br />
            <h5>Nombre *</h5>
            <input
              type="text"
              placeholder="Nombre*"
              {...register("name", { required: true, minLength: 8 })}
            />

            {errors.name?.type === "required" && <div>Nombre is required</div>}
            {errors.name?.type === "minLength" && (
              <div>Se precisa un minimo de 8 caracteres</div>
            )}
          </label>
          <br />
          {/* ---------------Nombre--------------- */}
          <label htmlFor="Numero" className="item">
            <br />
            <h5>Numero *</h5>
            <input
              type="text"
              placeholder="Numero*"
              {...register("number", { required: true, minLength: 7 })}
            />

            {errors.number?.type === "required" && (
              <div>Numero is required</div>
            )}
            {errors.number?.type === "minLength" && (
              <div>Se precisa un minimo de 7 caracteres</div>
            )}
          </label>
          <br />

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalTelefono;
