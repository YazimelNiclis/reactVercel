import API from "./Rule_API";

export const obtenerTelefonos = async () => {
  let url = "/api/telefonos";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const agregarTelefonos = async (telefono) => {
  let url = "/api/telefonos/nuevo";
  return await API.post(url, telefono)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
