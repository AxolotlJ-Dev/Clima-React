import { Line } from "react-chartjs-2";
import "../style/Charts.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import React from "react";

const LineChart = (props) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

 // Obtener la hora actual
const horaActual = new Date().getHours();

// Crear la sucesión de la hora actual más 3 en 3
const sucesion = [];
let valor = horaActual;
for (let i = 0; i < 12; i++) {
  sucesion.push(valor);
  valor = (valor + 3) % 24; // El operador módulo (%) permite volver al inicio después de la hora 23
}

// Imprimir el array resultante
console.log(sucesion); // Ejemplo de salida: [19, 22, 1, 4, 7, 10, 13, 16, 19, 22, 1, 4]


  var horas = [
    sucesion[0],
    sucesion[1],
    sucesion[2],
    sucesion[3],
    sucesion[4],
    sucesion[5],
    sucesion[6],
    sucesion[7],
    sucesion[8],
    sucesion[9],
    sucesion[10],
    sucesion[11],


  ];
  var humedad = [
    props.humidity1,
    props.humidity2,
    props.humidity3,
    props.humidity4,
    props.humidity5,
    props.humidity6,
    props.humidity7,
    props.humidity8,
    props.humidity9,
    props.humidity10,
    props.humidity11,
    props.humidity12,

    // forecast.list[12].main.humidity
  ];

  var midata = {
    labels: horas,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "Humedad",
        data: humedad,
        tension: 0,
        // color red
        fill: true,
        borderColor: "#C70039 ",
        backgroundColor: "#c700383b",
        pointRadius: 5,
        pointBorderColor: "#C70039 ",
        pointBackgroundColor: "#C70039 ",
        order: 4,
      },
      {
        label: "Temperatura",
        data: [
          props.temp1,
          props.temp2,
          props.temp3,
          props.temp4,
          props.temp5,
          props.temp6,
          props.temp7,
          props.temp8,
          props.temp9,
          props.temp10,
          props.temp11,
          props.temp12,

          // forecast.list[1].main.temp - 273.15,
        ],
        tension: 0,
        fill: true,
        //orange
        borderColor: "#FF5733 ",
        backgroundColor: "#ff583374",
        pointRadius: 5,
        pointBorderColor: "#FF5733 ",
        pointBackgroundColor: "#FF5733",
        type: "line",
        order: 3,
      },
      {
        label: "Sensación Térmica",
        data: [
          props.feels1,
          props.feels2,
          props.feels3,
          props.feels4,
          props.feels5,
          props.feels6,
          props.feels7,
          props.feels8,
          props.feels9,
          props.feels10,
          props.feels11,
          props.feels12,

          // forecast.list[1].main.feels_like - 273.15,
        ],
        tension: 0,
        fill: true,
        //yellow
        borderColor: "#FFF000 ",
        backgroundColor: "#ffee0074",
        pointRadius: 5,
        pointBorderColor: "#FFF000 ",
        pointBackgroundColor: "#FFF000 ",
        order: 2,
      },
      {
        label: "Velocidad de viento",
        data: [
          props.speed1,
          props.speed2,
          props.speed3,
          props.speed4,
          props.speed5,
          props.speed6,
          props.speed7,
          props.speed8,
          props.speed9,
          props.speed10,
          props.speed11,
          props.speed12,
        ],
        tension: 0,
        fill: true,
        //green
        borderColor: "#1E8449  ",
        backgroundColor: "#1e844998  ",
        pointRadius: 5,
        pointBorderColor: "#1E8449  ",
        pointBackgroundColor: "#1E8449 ",
        order: 1,
      },
    ],
  };

  var misoptions = {
    responsive: true,
    maintainAspectRatio: false,
    font: {
      size: 20,
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Grados ºC del 1 al 100",
          color: "#fff",
          font: {
            size: 20,
            // weight: "bold",
          },
        },
        min: 0,
        max: 100,
        ticks: { 
          color: "#fff",
          stepSize:5 // incremento de cada marca en el eje Y
        },
        grid: {
          color: "#636363", // Color de las líneas del eje Y
        },
      },
      x: {
        title: {
          display: true,
          text: "Horas de 3 en 3",
          color: "#fff",
          font: {
            size: 20,
            // weight: "bold",
          },
        },
        ticks: { color: "#fff" },
        grid: {
          color: "#636363", // Color de las líneas del eje X
        },
      },
    },
  };

  return (
    <div className="fluid">
      <Line data={midata} options={misoptions} />
    </div>
  );
};

export default LineChart;
