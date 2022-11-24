import React from 'react'
import '../scss/Home.scss'
import dropDown from '../images/dropDown.svg'
import sunIcon3 from '../images/sunIcon3.svg'
import FutureWeather from '../components/FutureWeather'

const Home = () => {
    return (
        <>
            <header className='home-header'>
                <div className='home-header-left'>
                    <h3 className='current-weather'>CURRENT WEATHER</h3>
                    <p className='current-weather'>Lahore, Pakistan <img src={dropDown} className="dropdown-icon" /></p>
                </div>
                <div className='home-header-right'>
                    <p>23rd November, 2022</p>
                </div>

            </header>

            <main className='weather-main'>

                <div className='weather-main-left'>
                    <img src={sunIcon3} className="sunIcon" />
                    <p>Clear Sky</p>

                </div>
                <div className='weather-main-right'>
                    <div className='weather-temp-column'>
                        <h1 className='weather-temper'>23.4 </h1>
                        <div className='weather-field'>
                            <p>Pressure</p>
                            <p>960 mb</p>
                        </div>
                        <div className='weather-field'>
                            <p>Humidity</p>
                            <p>54%</p>
                        </div>
                        <div className='weather-field'>
                            <p>Wind Direction</p>
                            <p>NNW</p>
                        </div>
                    </div>
                    <div className='weather-time-column'>
                        <h1 className='weather-time'>2<span className='time-blinker'>:</span>47 PM</h1>
                        <div className='weather-field'>
                            <p>UV Index</p>
                            <p>1 Low</p>
                        </div>

                        <div className='weather-field'>
                            <p>Visbility</p>
                            <p>5 km</p>
                        </div>
                        <div className='weather-field'>
                            <p>Air Quality Index</p>
                            <p>US 161</p>
                        </div>

                    </div>

                </div>


            </main>

            <FutureWeather />


        </>

    )
}

export default Home