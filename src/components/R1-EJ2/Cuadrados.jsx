import React from "react";
import { useState } from "react";
import "./cuadrados.css";

function Cuadrados() {
  const [cuadrado, setCuadrado] = useState("cuadrado");

  const onChangeCuadrado = () => {
    setCuadrado("cuadradoChange");
  };

  return (
    <>
      <div className={cuadrado} onClick={onChangeCuadrado}>
        1
      </div>
      <div className="cuadrado1" onClick={onChangeCuadrado}>
        2
      </div>
      <div className="cuadrado2" onClick={onChangeCuadrado}>
        3
      </div>
      <div className="cuadrado3" onClick={onChangeCuadrado}>
        4
      </div>
    </>
  );
}

export default Cuadrados;

/*  const [cuadrado1, setCuadrado1] = useState("cuadrado");

  const onChangeColor1 = () => {
    setCuadrado1("cuadradoChange");
  }; */
