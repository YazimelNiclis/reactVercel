import React from "react";

function Visualizar(props) {
  return (
    <div>
      {" "}
      {props.numeros.map((numeroIndividual) => {
        return <div>{numeroIndividual}</div>;
      })}
    </div>
  );
}

export default Visualizar;
