import React from 'react';
import '../scss/Navbar.scss';
import darkTheme from '../images/darkTheme.svg'

const Navbar = () => {
    return (
        <>
            <div className='navbar-main'>
                <h2>WEATHER.IO</h2>
                <img src={darkTheme} className="themeIcon"/>
            </div>

        </>

    )
}

export default Navbar