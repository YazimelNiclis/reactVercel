import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { iniciarSesion } from "../../api/Rule_auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    await iniciarSesion(formData, config)
      .then(() => {
        navigate("/Home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="app">
      <div className="contenedor">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Iniciar sesión</h2>
          <br />
          <label htmlFor="Correo" className="item">
            <p>Email *</p>
            <input
              placeholder="Email*"
              {...register("email", {
                required: true,
                pattern:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
              })}
            />
            <br />
            {errors.email?.type === "required" && (
              <span>Email is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span>Se requiere un formato valido de email</span>
            )}
          </label>
          <br />
          <label htmlFor="Password" className="item">
            <br />
            <p>Password *</p>
            <input
              type="password"
              placeholder="Password*"
              {...register("password", { required: true, minLength: 8 })}
            />
            <br />
            {errors.password?.type === "required" && (
              <span>Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>Se precisa un minimo de 8 caracteres</span>
            )}
          </label>

          <br />
          <br />

          <br />
          <button className="button" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
