import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  /* const handleSubmit = (e) => {
    e.preventDefault(); //Se utiliza este método para evitar el refresco automático de la página.
    alert(`Los datos ingresados son: ${email} y ${password}`); // Uso de backticks para mostrar variables en un string
  }; */

  return (
    <div className="app">
      <div className="contenedor">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Iniciar sesión</h2>
          <label htmlFor="Correo" className="item">
            <p>Correo</p>
            <input
              {...register("email", {
                required: true,
                pattern:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
              })}
            />
            {errors.email?.type === "required" && (
              <p role="alert">Email is required</p>
            )}
            {errors.email?.type === "pattern" && (
              <p role="alert">Solo se acepta un email valido</p>
            )}
          </label>
          <br />
          <label htmlFor="Contraseña" className="item">
            <p>Contraseña</p>
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password?.type === "required" && (
              <p role="alert">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p role="alert">El minimo requerido es 8 caracteres</p>
            )}
          </label>

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
