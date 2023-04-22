import React from "react";
import Spinner from "./Spinner";
import LineChart from "./LineChart";

const InfoCHarts = ({ loadingData, showData, weather ,forecast }) => {
  if (loadingData) {
    return <Spinner />;
  }
  return (
    <div className=" text-center">
      {showData === true ? (
        <div className="">
          <hr className="line " />
          <div className=" d-flex justify-content-center">
            <LineChart
              //humidity
              humidity1={forecast.list[1].main.humidity}
              humidity2={forecast.list[2].main.humidity}
              humidity3={forecast.list[3].main.humidity}
              humidity4={forecast.list[4].main.humidity}
              humidity5={forecast.list[5].main.humidity}
              humidity6={forecast.list[6].main.humidity}
              humidity7={forecast.list[7].main.humidity}
              humidity8={forecast.list[8].main.humidity}
              humidity9={forecast.list[9].main.humidity}
              humidity10={forecast.list[10].main.humidity}
              humidity11={forecast.list[11].main.humidity}
              humidity12={forecast.list[12].main.humidity}
              //main temp
              temp1={forecast.list[1].main.temp - 273.15}
              temp2={forecast.list[2].main.temp - 273.15}
              temp3={forecast.list[3].main.temp - 273.15}
              temp4={forecast.list[4].main.temp - 273.15}
              temp5={forecast.list[5].main.temp - 273.15}
              temp6={forecast.list[6].main.temp - 273.15}
              temp7={forecast.list[7].main.temp - 273.15}
              temp8={forecast.list[8].main.temp - 273.15}
              temp9={forecast.list[9].main.temp - 273.15}
              temp10={forecast.list[10].main.temp - 273.15}
              temp11={forecast.list[11].main.temp - 273.15}
              temp12={forecast.list[12].main.temp - 273.15}
              //feels like
              feels1={forecast.list[1].main.feels_like - 273.15}
              feels2={forecast.list[2].main.feels_like - 273.15}
              feels3={forecast.list[3].main.feels_like - 273.15}
              feels4={forecast.list[4].main.feels_like - 273.15}
              feels5={forecast.list[5].main.feels_like - 273.15}
              feels6={forecast.list[6].main.feels_like - 273.15}
              feels7={forecast.list[7].main.feels_like - 273.15}
              feels8={forecast.list[8].main.feels_like - 273.15}
              feels9={forecast.list[9].main.feels_like - 273.15}
              feels10={forecast.list[10].main.feels_like - 273.15}
              feels11={forecast.list[11].main.feels_like - 273.15}
              feels12={forecast.list[12].main.feels_like - 273.15}
              //speed
              speed1={forecast.list[1].wind.speed}
              speed2={forecast.list[2].wind.speed}
              speed3={forecast.list[3].wind.speed}
              speed4={forecast.list[4].wind.speed}
              speed5={forecast.list[5].wind.speed}
              speed6={forecast.list[6].wind.speed}
              speed7={forecast.list[7].wind.speed}
              speed8={forecast.list[8].wind.speed}
              speed9={forecast.list[9].wind.speed}
              speed10={forecast.list[10].wind.speed}
              speed11={forecast.list[11].wind.speed}
              speed12={forecast.list[12].wind.speed}
            />
          </div>
          <hr className="line " />
          <div>
            <p>
            La gráfica anterior muestra los datos de Velocidad del viento, Sensación térmica, Temperatura y Humedad.
            </p>

            <ul className=" text-start">
              <p className=" h4">Temperatura actual de: { forecast.city.name }</p>
              <li>
                <p>Velocidad de viento: {weather.wind.speed }m/s</p>
              </li>
              <li>
                <p>Sensación Térmica: {weather.main.humidity}% </p>
              </li>
              <li>
                <p>Temperatura: {(weather.main.temp - 273.15).toFixed(1)}ºC</p>
              </li>
              <li>
                <p>Humedad: {weather.main.humidity}% </p>
              </li>
            </ul>

          </div>

          {/* <Line data={midata} options={misoptions}/> */}
        </div>
      ) : (
        <div>
          <h2 className="text-light"> Sin datos</h2>
          <h3 className='text-center'>Introduce el nombre de un "Municipio/estado/pais"</h3>
        </div>
        
        
      )}
    </div>
  );
};

export default InfoCHarts;
