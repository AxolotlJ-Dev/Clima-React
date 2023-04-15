import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import NavH from './Nav/NavH';
import Instalaciones from './pages/Instalaciones';
import WeatherForecast from './pages/WeatherForecast'

import './App.css';
import Climogramas from "./pages/Climogramas";
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">

      <Router>
      
      <NavH />
        <Routes>
            <Route exact path="Clima-React/" element={ <Home /> } />
            <Route exact path="Clima-React/home" element={ <Home /> } />

            <Route exact path='Clima-React/Weather-Station' element={ <Instalaciones /> } />

            <Route exact path="Clima-React/Weather-Forecast" element={<WeatherForecast />} />

            <Route exact path="Clima-React/climograma" element={ <Climogramas /> } />

            <Route exact path="Clima-React/Contact" element={ <Contact /> } />

            <Route path="Clima-React/*" element={ <Error404 /> } />
            
            {/* <Route path="/Proyects" element={ <Proyects /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/Contact" element={ <Contact /> } /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
