import React from "react";
import "../style/Home.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar text="Home" />

      <div className=" container">
        <div className="row d-flex justify-content-center align-items-center">
          <h3> </h3>
          <div className="col-md-9 mb-3">
            <p className="intro">
              El clima es uno de los fenómenos naturales más fascinantes e
              importantes para la vida en la Tierra. Es el resultado de una
              compleja interacción entre la atmósfera, la superficie terrestre,
              los océanos y otros factores. En esta sección, puedes encontrar
              información actualizada sobre el clima de tu ciudad y otros
              lugares del mundo.
            </p>
          </div>
          <div className=" col-md-3">
            <img
              className=" img-fluid Moon"
              src="https://i.pinimg.com/originals/a1/01/e2/a101e22fc458c1110d418ee309f240c8.png"
              alt="Moon"
            />
          </div>
        </div>
        <div>
          <NavBar className="mt-5" text="Introducción" />
          <p>
            El clima es el conjunto de condiciones atmosféricas que caracterizan
            una región o zona geográfica determinada. Estas condiciones incluyen
            la temperatura, la humedad, la presión atmosférica, la velocidad y
            dirección del viento, y la cantidad de precipitación, entre otros
            factores. El clima es un fenómeno natural que está en constante
            cambio, debido a factores como la actividad humana, los cambios en
            la temperatura global y los eventos naturales como el calentamiento
            global y el cambio climático. Comprender el clima y cómo cambia es
            fundamental para la vida en nuestro planeta, ya que afecta a la
            flora, la fauna y a los seres humanos de manera directa. Es por eso
            que la observación, el estudio y la comprensión del clima son
            importantes en diferentes áreas, como la agricultura, la pesca, la
            navegación, la construcción, la gestión de recursos naturales y la
            planificación urbana.
          </p>
        </div>
        <div className="row mb-5 d-flex justify-content-center align-items-center">
          <NavBar text="De que trata esto." />
          <div className="col-md-8">
            <p>
              Esta página trata sobre el clima y su importancia para la vida en
              la Tierra. Proporciona información actualizada sobre el clima de
              diferentes lugares del mundo, así como información sobre los
              diferentes tipos de nubes y cómo se pueden utilizar para predecir
              el clima. Además, la página también incluye información sobre cómo
              se puede medir y observar el clima, así como la importancia de
              comprender cómo cambia el clima y sus efectos en la flora, la
              fauna y los seres humanos. En resumen, esta página es una guía
              informativa para aprender sobre el clima y su importancia en
              nuestro planeta.
            </p>
          </div>
          <div className=" col-md-4">
          <img className=" Moon img-fluid"src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Translucent_Helix_Nebula.png/600px-Translucent_Helix_Nebula.png" alt="Imagen de la nebulosa Oscura de la Cabeza de Caballo" />
          </div>
        </div>

        <hr className=" line" />
        <div className=" tree mt-5">
          <Link className=" text-decoration-none text-white" to="/Weather-Forecast">
            <h4>Ver mas</h4>
          </Link>
          <ul>
            <li>
              <Link className="VerMas" to="/Weather-Forecast">
                  Pronóstico del tiempo
              </Link>
            </li>
            <li>
              <Link className="VerMas" to="/Weather-Station">
                  Instalación meteorológica
              </Link>
            </li>
            <li>
              <Link className="VerMas" to="/climograma">
                Climogramas
              </Link>
            </li>
            <li>
              <Link className="VerMas" to="/Contact">
                  Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
