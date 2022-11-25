import React from "react";
import Tarea from "../Tarea/Tarea";
function ListaTareas(props) {
  return (
    <>
      {props.tareas.map((item) => {
        return <Tarea item={item} />;
      })}
    </>
  );

  /* return props.tareas.map((item) => {
    return <Tarea item={item} />;
  }); */
}

export default ListaTareas;
