import React from "react";
import "./ContenedorImg.css";
function ContenedorImg(props) {
  return (
    <div className="treeImageContainer">
      <button className="showHideButton" onClick={props.toggle}>
        Show or hide
      </button>
      {props.mostrar == true ? (
        <img
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
          alt="arbol"
          className="treeImage"
        />
      ) : (
        <span>No hay imagen</span>
      )}
    </div>
  );
}

export default ContenedorImg;
