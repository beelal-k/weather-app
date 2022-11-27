import React, { useEffect } from 'react'
import '../scss/Home.scss'
import dropDown from '../images/dropDown.svg'
import FutureWeather from '../components/FutureWeather'
import Footer from '../components/Footer'
import { weatherCodes } from "../weatherCodes";

const Home = ({ currentWeatherData }) => {

    // const [statusCode, setStatusCode] = useState();

    // setStatusCode(weatherCodes[currentWeatherData.current_weather.weathercode].status)
    // console.log(weatherCodes);

    const currentDate = () => {
        let date = new Date();
        let day = date.toLocaleString('default', { day: 'numeric' });
        let month = date.toLocaleString('default', { month: 'long' });
        let year = date.toLocaleString('default', { year: 'numeric' });

        let currentDate = day + " " + month + ","  + " "  + year;

        document.getElementById('date').innerText = currentDate;
        

    }



    const currentTime = () => {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let session = "AM"


        if (hh == 0) {
            hh = 12;
        }

        if (hh > 12) {
            hh = hh - 12;
            session = "PM";
        }

        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;

        let time = hh + ":" + mm + " " + session;

        document.getElementById('clock').innerText = time;
        let t = setTimeout(currentTime, 1000);

    }

    useEffect(() => {
        currentTime();
        currentDate();
    })

    return (
        <>
            <header className='home-header'>
                <div className='home-header-left'>
                    <h3 className='current-weather'>CURRENT WEATHER</h3>
                    <p className='current-weather'>Lahore, Pakistan <img src={dropDown} className="dropdown-icon" /></p>
                </div>
                <div className='home-header-right'>
                    <p id='date'>N/A</p>
                </div>

            </header>

            <main className='weather-main'>

                <div className='weather-main-left'>
                    {/* <img src={sunIcon3} className="sunIcon" /> */}

                    {
                        currentWeatherData.current_weather ?
                            <img src={weatherCodes[currentWeatherData.current_weather.weathercode].img} />
                            :
                            null
                    }

                    {
                        currentWeatherData.current_weather ?
                            <p>{weatherCodes[currentWeatherData.current_weather.weathercode].status}</p>
                            :
                            null
                    }

                </div>
                <div className='weather-main-right'>
                    <div className='weather-temp-column'>
                        {
                            currentWeatherData.current_weather ?
                                <h1 className='weather-temper'>{currentWeatherData.current_weather.temperature}</h1>
                                :
                                null
                        }

                        <div className='temp-column-fields'>
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
                    </div>
                    <div className='weather-time-column'>
                        <h1 className='weather-time' id='clock'></h1>
                        <div className='time-column-fields'>
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

                </div>


            </main>

            <FutureWeather />

            <Footer />


        </>

    )
}

export default Home