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
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/home" element={ <Home /> } />

            <Route exact path='/Weather-Station' element={ <Instalaciones /> } />

            <Route exact path="/Weather-Forecast" element={<WeatherForecast />} />

            <Route exact path="/climograma" element={ <Climogramas /> } />

            <Route exact path="/Contact" element={ <Contact /> } />
            
            <Route path="*" element={ <Error404 /> } />
            
            {/* <Route path="/Proyects" element={ <Proyects /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/Contact" element={ <Contact /> } /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
