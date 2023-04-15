import React,  { useState, useEffect } from "react";
import Form from "./Form";
import Card from "./Card";

import axios from 'axios';
import moment from 'moment-timezone';

const WeatherPanel = () => {


    let urlWeather =
      "https://api.openweathermap.org/data/2.5/weather?appid=865a63a5a9ce98bc23ee72834efa1412&lang=es";
    let cityUrl = "&q=";
    let urlForecast =
      "https://api.openweathermap.org/data/2.5/forecast?appid=865a63a5a9ce98bc23ee72834efa1412&lang=es";
  
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [City, setCity] = useState("");
    const [time, setTime] = useState("");
  
    const getLocation = async (loc) => {
      setLoading(true);
      setCity(loc);
  
      //weather
      urlWeather = urlWeather + cityUrl + loc;
  
      await fetch(urlWeather)
        .then((response) => {
          if (!response.ok) throw new Error('La solicitud falló. Estado de respuesta: ' + response.status);;
          return response.json();
        })
        .then((weatherData) => {
          console.log(weatherData);
          setWeather(weatherData);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setShow(false);
        });
  
      //forecast
      urlForecast = urlForecast + cityUrl + loc;
  
      await fetch(urlForecast)
        .then((response) => {
          if (!response.ok) throw new Error('La solicitud falló. Estado de respuesta: ' + response.status);;
          return response.json();
        })
        .then((forecastData) => {
          console.log(forecastData);
          setForecast(forecastData);
  
          setLoading(false);
          setShow(true);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setShow(false);
        });
    };
  
    useEffect(() => {
      const fetchTime = async () => {
        if (City) {
          const API_KEY = "865a63a5a9ce98bc23ee72834efa1412";
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}`;
          const response = await axios.get(url);
          const { dt, timezone } = response.data;
          const localTime = moment.unix(dt).utcOffset(timezone / 60);
          setTime(localTime.format("hh:mm A"));
        }
      };
      fetchTime();
    }, [City]);
  



  return (
    <React.Fragment>
      <Form newLocation={getLocation} />
      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
        Time={ time }
      />
    </React.Fragment>
  );
};

export default WeatherPanel;
