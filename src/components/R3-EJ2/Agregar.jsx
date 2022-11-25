import React from "react";
import { useState } from "react";
import Visualizar from "./Visualizar";

function Agregar() {
  const [numeros, setNumeros] = useState([]);
  const [numeroCargado, setNumeroCargado] = useState(0);

  const onChangeNumero = (e) => {
    setNumeroCargado(e.target.value);
  };

  const onClickBoton = () => {
    setNumeros([...numeros, numeroCargado]);
  };

  return (
    <div>
      <input
        type="number"
        onChange={onChangeNumero}
        placeholder="Ingresar un numero"
      ></input>
      <button name="agregar" onClick={onClickBoton}>
        AGREGAR
      </button>
      <Visualizar numeros={numeros} />
    </div>
  );
}

export default Agregar;
