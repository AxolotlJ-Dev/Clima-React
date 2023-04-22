import React from "react";
import Spinner from "./Spinner";

const Card = ({ loadingData, showData, weather, forecast, Time }) => {
  //date
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + "/" + month + "/" + year;

  // Obtener la hora actual
  const horaActual = new Date().getHours();

  // Sumarle 3 a la hora actual
  var hora1 = horaActual + 11;
  // Verificar si se ha superado el ciclo de 24 horas
  if (hora1 >= 24) {
    hora1 -= 24;
  }
  // Crear el array con la hora actual y la hora nueva
  var horaF1 = [horaActual, hora1];

  var hora2 = horaActual + 14;
  // Verificar si se ha superado el ciclo de 24 horas
  if (hora2 >= 24) {
    hora2 -= 24;
  }
  // Crear el array con la hora actual y la hora nueva
  var horaF2 = [horaActual, hora2];

  var hora3 = horaActual + 17;
  // Verificar si se ha superado el ciclo de 24 horas
  if (hora3 >= 24) {
    hora3 -= 24;
  }
  // Crear el array con la hora actual y la hora nueva
  var horaF3 = [horaActual, hora3];




  var url = "";
  var iconUrl = ";";

  var iconUrl3 = "";
  var iconUrl6 = "";
  var iconUrl9 = "";

  var forecastDate3 = "";
  var forecastDate6 = "";
  var forecastDate9 = "";


  console.log(Time);

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 = date + " " + horaF1[1];
    forecastDate6 = date + " " + horaF2[1];
    forecastDate9 = date + " " + horaF3[1];
     
  }

  return (
    <div className=" mt-5">
      {showData === true ? (
        <div className=" container">
          <div className=" cardW">
            <div className="row g-0">
              <div className=" col-md-4 conted">
                <h3 className="card-title">{weather.name}</h3>
                <p className=" card-date">{date}</p>
                <p className=" card-time">{Time}</p>

                <div className="hijo">
                  <p className=" h2 card-temp">
                    {(weather.main.temp - 273.15).toFixed(1)}ºC
                  </p>
                  <p className=" card-desc">
                    {" "}
                    <img src={iconUrl} alt="icon" />{" "}
                    {weather.weather[0].description}{" "}
                  </p>
                </div>

                <img
                  className=" card-img img-fluid"
                  src="https://images.pexels.com/photos/2453292/pexels-photo-2453292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="city"
                />
              </div>
              <div className="col-md-8">
                <div className="text-start mt-3 m-1 card-mini">
                  <p className=" card-text">
                    Temperatura Máxima:{" "}
                    {(weather.main.temp_max - 273.15).toFixed(1)}ºC
                  </p>
                  <p className=" card-text">
                    Temperatura Mínima:{" "}
                    {(weather.main.temp_min - 273.15).toFixed(1)}ºC
                  </p>
                  <p className=" card-text">
                    Sensación Térmica:{" "}
                    {(weather.main.feels_like - 273.15).toFixed(1)}ºC
                  </p>
                  <p className=" card-text">
                    Humedad: {weather.main.humidity}%
                  </p>
                  <p className=" card-text">
                    Velocidad Del Viento: {weather.wind.speed} m/s{" "}
                  </p>
                </div>
                <hr className="line " />

                <div className="row m-1 card-sub-mini">
                  <div className="col-4 card-mini">
                    <p>{ forecastDate3 }h</p>
                    <p className=" description">
                      {" "}
                      <img src={iconUrl3} alt="icon3" />{" "}
                      {forecast.list[1].weather[0].description}{" "}
                    </p>
                    <p className=" temp">
                      {" "}
                      {(forecast.list[1].main.temp - 273.15).toFixed(1)} ºC
                    </p>
                  </div>
                  <div className="col-4 card-mini">
                    <p>{forecastDate6}h</p>
                    <p className=" description">
                      {" "}
                      <img src={iconUrl6} alt="icon6" />{" "}
                      {forecast.list[2].weather[0].description}{" "}
                    </p>
                    <p className=" temp">
                      {" "}
                      {(forecast.list[2].main.temp - 273.15).toFixed(1)} ºC
                    </p>
                  </div>
                  <div className="col-4 card-mini">
                    <p>{forecastDate9}h</p>
                    <p className=" description">
                      {" "}
                      <img src={iconUrl9} alt="icon9" />{" "}
                      {forecast.list[3].weather[0].description}{" "}
                    </p>
                    <p className=" temp">
                      {" "}
                      {(forecast.list[3].main.temp - 273.15).toFixed(1)} ºC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-light"> Sin datos</h2>
          <h3 className="text-center">
            Introduce el nombre de un "Pais/Ciudad/Estado"
          </h3>
        </div>
      )}
    </div>
  );
};

export default Card;
