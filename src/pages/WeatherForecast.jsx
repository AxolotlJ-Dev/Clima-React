import React from 'react'

import NavBar from "../components/NavBar";
import WeatherPanel from "../components/WeatherPanel";
import "../style/WeatherForecast.css";


const WeatherForecast = () => {
  return (
    <div className=' text-center'>
        <NavBar text="predicción meteorológica" />
        <WeatherPanel />
        
    </div>
  )
}

export default WeatherForecast;