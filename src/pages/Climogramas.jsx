import React from 'react'
import NavBar from '../components/NavBar'
import GraficContainer from '../components/GraficContainer'
// import LinesChart from '../components/LinesCharts'


const Climogramas = () => {
  return (
    <div>
      <NavBar text="Climogramas" /> 
      <GraficContainer  />


    
        {/* <div className='Grafica'>
            <LinesChart />
        </div>  */}
      
    </div>
    
  )
}

export default Climogramas;
