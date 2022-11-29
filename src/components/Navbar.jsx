import React, { useRef } from 'react';
import '../scss/Navbar.scss';

const Navbar = ({ darkMode, updateTheme }) => {

    const navbarRef = useRef();
    
    return (
        <>
            <div className='navbar-main' id='navMain' ref={navbarRef}>
                <h2>WEATHER.IO</h2>
                {/* {
                    darkMode ?
                        <img src={lightTheme} className="themeIcon" onClick={updateTheme} />
                        :
                        <img src={darkTheme} className="themeIcon" onClick={updateTheme} />
                } */}
            </div>

        </>

    )
}

export default Navbar