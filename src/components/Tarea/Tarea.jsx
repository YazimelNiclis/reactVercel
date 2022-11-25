import React from "react";
import "./Tarea.css";

function Tarea(props) {
  return (
    <div className="task">
      <span>
        Tarea: {props.item.id} + {props.item.title}
      </span>
    </div>
  );
}

export default Tarea;
