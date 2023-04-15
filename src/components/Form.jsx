import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'


const Form = ({ newLocation }) => {
    const [city, setcity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city})
        if(city === "" || !city) return;

        newLocation(city);
    }


  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
            <div className=" form-input input-group mb-3 mx-auto">
                <input className='form-control shadow-none' type="text" placeholder='Pais/Ciudad/Estado' onChange={(e) => setcity(e.target.value)}/>
                <button className='btn input-group-text'  type='submit'>
                     <FontAwesomeIcon color='#fff' icon={ faMagnifyingGlass } />
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form