import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  const ESC_KEY_CODE = "Escape";
  const { navOpen, navIsAnimating, closeNav } = props;
  const keyPressHandler = ({ key }) => {
    if (key === ESC_KEY_CODE && navOpen) {
      closeNav();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  });

  const classes = `${navOpen ? " active" : ""}${
    navIsAnimating ? " is-animating" : ""
  }`;

  return (
    <div className={`navigation-menu${classes}`}>
      <div className="wrap">
        <div className="cols">
          <div className="col col-left col-links">
            <ul className="links">
              <li className="link">
                <NavLink
                  onClick={() => {
                    document.body.classList.remove("nav-open");
                    props.closeNav();
                  }}
                  to="Clima-React/Home"
                >
                  Home
                </NavLink>
              </li>

              <li className="link">
                <NavLink
                  onClick={() => {
                    document.body.classList.remove("nav-open");
                    props.closeNav();
                  }}
                  to="Clima-React/Weather-Forecast"
                >
                  {/* Weather Forecast */}
                  Pronóstico del tiempo
                </NavLink>
              </li>

              <li className="link">
                <NavLink
                  to="Clima-React/Weather-Station"
                  onClick={() => {
                    document.body.classList.remove("nav-open");
                    props.closeNav();
                  }}
                >
                  {/* Weather Installation */}
                  Instalación meteorológica
                </NavLink>
              </li>

              <li className="link">
                <NavLink
                  to="Clima-React/climograma"
                  onClick={() => {
                    document.body.classList.remove("nav-open");
                    props.closeNav();
                  }}
                >
                  Climogramas
                </NavLink>
              </li>
              <li className="link">
                <NavLink 
                  to="Clima-React/Contact"
                  onClick={() => {
                    document.body.classList.remove("nav-open");
                    props.closeNav();
                  }}
                >
                  Contacto
                </NavLink>
              </li>

            </ul>
          </div>
          <div className="col col-right col-image">
            <img
              className="astro"
              src="https://i.imgur.com/0pWqp5j.png"
              // src="https://www.pngplay.com/wp-content/uploads/4/Sun-PNG-Free-File-Download.png"
              alt="Sun"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
