import React from "react";
import "./ejercicio1.css";
function Ejercicio1() {
  return (
    <div>
      <div id="contenido">
        <div id="encabezado">
          <h1>ZEUS</h1>
          <h2>Mitología Griega</h2>
        </div>
        <div id="articulo">
          <div id="izq">
            <h2>Origenes</h2>
            <p>
              <img src="/imagenes/zeus160x196.jpg" class="izquierda" />
              En la mitología griega Zeus es el «padre de los dioses y los
              hombres», que gobernaba a los dioses del monte Olimpo como un
              padre a una familia, de forma que incluso los que no eran sus
              hijos naturales se dirigían a él como tal. Era el Rey de los
              Dioses que supervisaba el universo. Era el dios del cielo y el
              trueno. Sus atributos incluyen el rayo, el águila, el toro y el
              roble. Además de su herencia indoeuropea, el clásico Zeus
              «recolector de nubes» también obtuvo ciertos rasgos iconográficos
              de culturas del antiguo Oriente Próximo, como el cetro. Zeus fue
              frecuentemente representado por los artistas griegos en dos poses:
              de pie, avanzando con un rayo levantado en su mano derecha, y
              sentado majestuosamente.
            </p>
            <p>
              Hijo de Crono y Rea, era el más joven de sus descendientes. En la
              mayoría de las tradiciones aparece casado con Hera, aunque en el
              oráculo de Dódona su esposa era Dione, con quien según la Ilíada
              fue padre de Afrodita. Es conocido por sus numerosas aventuras y
              amantes, fruto de las cuales fueron muchas deidades y héroes,
              incluyendo Atenea, Apolo y Artemisa, Hermes, Perséfone, Dioniso,
              Perseo, Heracles, Helena, Minos y las Musas. Con Hera suele
              decirse que fue padre de Ares, Hebe y Hefesto.
            </p>
          </div>
          <div id="der">
            <h2>Cultos panhelénicos</h2>
            <p>
              <img src="/imagenes/zeus3.jpg" className="derecha" />
              El principal centro donde los griegos se reunían para rendir
              honores al rey de sus dioses era Olimpia. El festival cuatrienal
              que se celebraba allí incluía los famosos Juegos olímpicos. Había
              también un altar dedicado a Zeus construido no de piedra, sino de
              ceniza, procedente de los restos acumulados durante muchos siglos
              de animales sacrificados allí en honor a la deidad.
            </p>
            <p>
              Además de los principales santuarios situados entre polis, no
              había formas de culto a Zeus que compartiese todo el mundo griego.
              La mayoría de los títulos enumerados más abajo, por ejemplo,
              podían encontrarse en ciertos templos griegos desde Asia Menor
              hasta Sicilia.{" "}
            </p>
            <p>Fuente: wikipedia</p>
          </div>
        </div>
        <div id="piePagina">
          <h3>&copy; Todos los derechos reservados</h3>
        </div>
      </div>
    </div>
  );
}

export default Ejercicio1;
