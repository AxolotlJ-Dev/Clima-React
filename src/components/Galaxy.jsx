import React from "react";
import "../style/Galaxy.css";

const Galaxy = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <section id="solar-system">
        <div id="sun"></div>
        <article id="mercury-trajectory">
          <div id="mercury"></div>
        </article>
        <article id="venus-trajectory">
          <div id="venus"></div>
        </article>
        <article id="earth-trajectory">
          <div id="earth"></div>
        </article>
        <article id="mars-trajectory">
          <div id="mars"></div>
        </article>
      </section>
    </div>
  );
};

export default Galaxy;
