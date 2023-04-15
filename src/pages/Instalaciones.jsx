import React from "react";
import "../style/Instalaciones.css";
import NavBar from "../components/NavBar";

const Instalaciones = () => {
  return (
    <div className="instalattion">
      <NavBar text="Instalación meteorológica" />
      <div className=" container">
        <div className="row">
          <div className="col-lg-6">
            <p>
              Una estación meteorológica es un dispositivo que se utiliza para
              medir y registrar varias condiciones climáticas como la
              temperatura, la humedad, la presión atmosférica, la velocidad y
              dirección del viento, la radiación solar, la precipitación, entre
              otras variables.
            </p>
            <p>
              Existen diferentes tipos de estaciones meteorológicas, desde las
              más básicas que miden solo unas pocas variables climáticas hasta
              las más avanzadas que pueden medir y registrar datos en tiempo
              real con alta precisión. Las estaciones meteorológicas también
              pueden ser fijas o portátiles, dependiendo de las necesidades del
              usuario.
            </p>
            <p>
              La información que se recopila a través de las estaciones
              meteorológicas es fundamental para la comprensión del clima y la
              predicción del tiempo. Estos datos son utilizados por científicos,
              meteorólogos, agricultores, aviadores y otros profesionales para
              tomar decisiones importantes y para planificar actividades en
              función de las condiciones climáticas.
            </p>
          </div>
          <div className="col-lg-6 text-center ">
            <img
              className="img-fluid"
              src="https://media.gettyimages.com/id/157717968/es/foto/estación-meteorológica-en-islandia.jpg?s=612x612&w=0&k=20&c=lK80D9qgjy21ys2c3y7PBvx6pCG66AHbkuluaXGeSNg="
              alt="Instalacion"
            />
            {/* <p> Imagen de una estacione meteorologica </p> */}
          </div>
        </div>

        <NavBar
          className="mt-5"
          text="diferentes tipos de estaciones meteorológicas"
        />
        <div className=" row">
          <div className="col-lg-9">
            <ul>
              <li>
                <p className=" h4">
                  Estaciones meteorológicas convencionales:{" "}
                </p>
                <p>
                  Son las estaciones meteorológicas más comunes y tradicionales.
                  Estas estaciones constan de varios instrumentos como
                  termómetros, barómetros, pluviómetros, higrómetros,
                  anemómetros, etc. Los datos recopilados se registran
                  manualmente a intervalos regulares y se procesan
                  posteriormente.
                </p>
              </li>
              <hr />
              <li>
                <p className=" h4">Estaciones meteorológicas automáticas:</p>
                <p>
                  Estas estaciones utilizan sensores electrónicos para medir las
                  variables meteorológicas. Los sensores están conectados a un
                  registrador de datos que almacena y procesa los datos. Las
                  estaciones automáticas también pueden estar conectadas a una
                  red de telemetría que transmite los datos en tiempo real.
                </p>
              </li>
              <hr />
              <li>
                <p className=" h4">Estaciones meteorológicas móviles:</p>
                <p>
                  Son estaciones meteorológicas portátiles que se pueden
                  transportar fácilmente a diferentes ubicaciones. Estas
                  estaciones se utilizan a menudo en situaciones de emergencia
                  para evaluar las condiciones meteorológicas en áreas afectadas
                  por desastres naturales.
                </p>
              </li>
              <hr />
              <li>
                <p className=" h4">Estaciones meteorológicas satelitales: </p>
                <p>
                  Estas estaciones utilizan satélites meteorológicos para
                  recopilar datos sobre las condiciones climáticas en diferentes
                  partes del mundo. Estos datos se utilizan para predecir el
                  tiempo y el clima a largo plazo.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <p>
              Las estaciones meteorológicas pueden medir variables
              meteorológicas como la temperatura, la humedad, la presión
              atmosférica, la velocidad y dirección del viento, la radiación
              solar, la precipitación, la visibilidad, entre otros. Los datos
              meteorológicos se utilizan para diversas aplicaciones, como
              predecir el tiempo, monitorear el clima, predecir el rendimiento
              de los cultivos, controlar el suministro de agua, monitorear la
              calidad del aire, entre otros.
            </p>
            <p>
              Las estaciones meteorológicas también se utilizan en la aviación,
              la navegación, el transporte terrestre y marítimo, la
              construcción, la investigación científica, la educación y otros
              campos. En resumen, las estaciones meteorológicas son herramientas
              fundamentales para la comprensión del clima y la predicción del
              tiempo, y su uso se extiende a muchas áreas de la vida cotidiana y
              la actividad humana.
            </p>
          </div>
        </div>
        {/* cerrar */}
        <NavBar
          className="mt-5"
          text="Los diferentes factores que contribuyen a nuestro clima"
        />
        <div>
          <ul>
            <li>
              <p className=" h4">Radiación solar:</p>
              <p>
                La radiación solar es la fuente de energía que calienta la
                atmósfera y la superficie terrestre. La cantidad de radiación
                solar que llega a la Tierra depende de factores como la latitud,
                la hora del día, la estación del año, la cobertura de nubes,
                entre otros.
              </p>
            </li>
            <hr />
            <li>
              <p className=" h4">Atmósfera:</p>
              <p>
                La atmósfera es una capa de gases que rodea la Tierra y que
                juega un papel importante en el clima. La atmósfera actúa como
                un escudo que protege la Tierra de la radiación solar y ayuda a
                regular la temperatura global.
              </p>
            </li>
            <hr />
            <li>
              <p className=" h4">Océanos:</p>
              <p>
                Los océanos cubren más del 70% de la superficie terrestre y
                tienen una gran influencia en el clima. Los océanos absorben y
                liberan grandes cantidades de calor, lo que afecta la
                temperatura global y los patrones de viento.
              </p>
            </li>
            <hr />
            <li>
              <p className=" h4">Topografía:</p>
              <p>
                La topografía, o la forma de la superficie terrestre, también
                puede influir en el clima. Las montañas pueden afectar los
                patrones de viento, causando lluvia en un lado y sequía en el
                otro. La elevación también puede influir en la temperatura, ya
                que la temperatura disminuye con la altitud.
              </p>
            </li>
            <hr />
            <li>
              <p className=" h4">Gases de efecto invernadero: </p>
              <p>
                Los gases de efecto invernadero, como el dióxido de carbono, el
                metano y el vapor de agua, atrapan el calor en la atmósfera y
                contribuyen al calentamiento global. La quema de combustibles
                fósiles, la deforestación y otras actividades humanas han
                aumentado la cantidad de gases de efecto invernadero en la
                atmósfera, lo que ha provocado un aumento de la temperatura
                global.
              </p>
            </li>
            <hr />
            <p className=" h6">
              Estos son algunos de los factores que contribuyen a nuestro clima.
              Cada uno de ellos juega un papel importante en la creación de los
              patrones climáticos que experimentamos en diferentes partes del
              mundo.
            </p>
          </ul>
        </div>

        <NavBar className="mt-5" text="Tipos de nubes" />
        <div>
          <div className="row">
            <div className="col-md-8">
              <p className="h4">Nubes cirrus:</p>
              <p>
                Son nubes delgadas y blancas que se encuentran a gran altura en
                la atmósfera. Están compuestas de cristales de hielo y se
                asocian con el buen tiempo.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className=" img-fluid"
                src="https://web.extension.illinois.edu/treehouse_sp/images/15915_3.jpg"
                alt="Nubes cirros"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <p className="h4">Nubes estratos:</p>
              <p>
                Son nubes que se presentan como capas uniformes y extendidas en
                el cielo, a menudo cubriendo todo el cielo. Estas nubes están
                ubicadas a baja altura en la atmósfera y suelen estar asociadas
                con el clima nublado y lluvioso.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className=" img-fluid"
                src="https://web.extension.illinois.edu/treehouse_sp/images/15915_2.jpg"
                alt="Nubes Estractos"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <p className="h4">Nubes cúmulos:</p>
              <p>
                Son nubes blancas y esponjosas con una base plana y una parte
                superior redondeada. Se forman a partir de la convección del
                aire cálido y húmedo y se asocian con el buen tiempo, aunque
                pueden convertirse en nubes de tormenta si continúan creciendo.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className=" img-fluid"
                src="https://web.extension.illinois.edu/treehouse_sp/images/15915_1.jpg"
                alt="Cumulos"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <p className="h4">Nubes estratocúmulos:</p>
              <p>
                Son nubes grises y uniformes que cubren gran parte del cielo y
                se forman por la combinación de nubes estratos y cúmulos. A
                menudo están asociadas con el clima inestable.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className=" img-fluid"
                src="https://misteriosmeteorologicos.files.wordpress.com/2015/11/stratocumulus_lacunosus1.jpg?w=493&h=328"
                alt="Nubes estratocúmulos"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <p className=" h4">Nubes cúmulos-nimbos:</p>
              <p>
                Son nubes grandes y oscuras con una base plana y una parte
                superior en forma de yunque. Estas nubes son conocidas como
                nubes de tormenta, ya que pueden producir lluvias fuertes, rayos
                y truenos.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className=" img-fluid"
                src="https://s.w-x.co/util/image/w/es-escb2_0.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
                alt="Nubes cúmulos-nimbos"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <p className="h4">Nubes altostratos:</p>
              <p>
                Son nubes grises o azuladas que cubren gran parte del cielo y se
                encuentran a una altura media en la atmósfera. Estas nubes están
                asociadas con el mal tiempo y pueden preceder a la llegada de
                una tormenta.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className=" img-fluid"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Altostratus_translucidus_2_%2818122021%29.jpg/240px-Altostratus_translucidus_2_%2818122021%29.jpg"
                alt="nubes Altostratus"
              />
            </div>
          </div>
          <hr />
          <div className="row mb-5">
            <div className="col-md-8">
              <p className=" h4">Nubes altocúmulos:</p>
              <p>
                Son nubes blancas o grises que tienen una apariencia ondulada o
                rizada y se encuentran a una altura media en la atmósfera. Estas
                nubes están asociadas con el buen tiempo, aunque pueden indicar
                la llegada de un frente frío.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className=" img-fluid"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Altocumulus02.jpg/240px-Altocumulus02.jpg"
                alt="Nubes Altocumulus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instalaciones;
