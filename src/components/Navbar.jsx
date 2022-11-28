import React from 'react';
import '../scss/Navbar.scss';
import darkTheme from '../images/darkTheme.svg'
import lightTheme from '../images/lightTheme.svg'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../store/theme/themeSlice';

const Navbar = () => {

    const themeSlice = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    // const updateTheme = () => {
        
        // }
        
        const updateTheme = () => {
            
            dispatch(changeTheme(!themeSlice.useDarkTheme))
                console.log(themeSlice.useDarkTheme);
            
            if (themeSlice.useDarkTheme) {
                document.getElementById('navMain').style.backgroundColor = "#232D3E";
            }
             if (themeSlice.useDarkTheme === false) {
                document.getElementById('navMain').style.backgroundColor = "#B2E0EA";
            }
            
            
            
    }


    return (
        <>
            <div className='navbar-main' id='navMain'>
                <h2>WEATHER.IO</h2>
                {
                    themeSlice.useDarkTheme ?
                        <img src={lightTheme} className="themeIcon" onClick={updateTheme} />
                        :
                        <img src={darkTheme} className="themeIcon" onClick={updateTheme} />
                }
            </div>

        </>

    )
}

export default Navbar