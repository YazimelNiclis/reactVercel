import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import { consultarBackend } from "./api/Rule_telefonos";
function App() {
  const [mensaje, setMensaje] = useState("");

  const consultarBack = async () => {
    await consultarBackend()
      .then((resultado) => {
        setMensaje(resultado);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    consultarBack();
  }, []);
  return (
    <div className="App">{mensaje && <p>{mensaje.time.toString()}</p>}</div>
  );
}

export default App;
