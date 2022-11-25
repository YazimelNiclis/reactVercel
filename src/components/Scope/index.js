import React from "react";

function Scope() {
  let alfajor = "Guaymallen"; //Scope global
  // El código escrito en esta parte va a poder acceder a alfajor.
  function myFunction() {
    // El código escrito en esta parte también va a poder acceder a alfajor.
  }

  //------------------------------------------------------------------------------------------------------

  // El código escrito en esta parte NO va a poder acceder a la variable alfajor.
  function myFunction2() {
    let alfajor = "Guaymallen"; //Scope local
    // El código escrito acá si puede.
  }

  // ----------------------------------------------------------------------------------------------

  if (true) {
    // este bloque if no crea un scope

    // preferencias se encuentra en el scope local por el uso de la keyword 'let'
    let preferencias = "Codear";
    // skills también es una scope local por el uso de la keyword 'const'
    const skills = "Java";
  }

  /*   console.log(nombre); // logs 'Juan'
  console.log(preferencias); // Uncaught ReferenceError: preferencias is not defined
  console.log(skills); // Uncaught ReferenceError: skills is not defined */

  // ------------------------------------------------------------------------------------------

  function myFunction() {
    let nombre = "Juan";

    function parent() {
      // nombre si es accesible desde acá.
      // preferencias en cambio, no es accesible.
      function child() {
        // tambien podemos acceder a nombre desde acá.
        nombre = "pepe";
        let preferencias = "scope local";
      }
    }
  }
  return <div></div>;
}

export default Scope;
