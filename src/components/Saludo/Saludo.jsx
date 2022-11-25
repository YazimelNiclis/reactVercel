import React from "react";
import "./Saludo.css";
function Saludo(props) {
  return (
    <div>
      <span>{props.text}</span>
    </div>
  );
}

export default Saludo;
