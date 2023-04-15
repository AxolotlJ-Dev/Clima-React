import React from 'react';

const NavBar = (props, className) => {
  return (
    <nav className={`container-fluid bg-white text-black mb-5 ${props.className}`}>
        <div className=' container-fluid'>
            <h3 className=' text-center mx-auto '>
                {props.text}
            </h3>
        </div>
    </nav>
  )
}

export default NavBar;