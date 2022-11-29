import React, { useEffect, useState } from 'react'
import '../scss/Home.scss'
import moonIcon from '../images/moonIcon.svg'
import FutureWeather from '../components/FutureWeather'
import Footer from '../components/Footer'
import { weatherCodes } from "../weatherCodes";
import * as Select from '@radix-ui/react-select';



const Home = ({ currentWeatherData, recentDate, darkMode }) => {

    const [dayTime, setDayTime] = useState(true);


    const getCurrentDate = () => {
        let date = new Date();
        let day = date.toLocaleString('default', { day: 'numeric' });
        let month = date.toLocaleString('default', { month: 'long' });
        let year = date.toLocaleString('default', { year: 'numeric' });

        let currentDate = month + " " + day + "," + " " + year;

        document.getElementById('date').innerText = currentDate;
    }

    const currentTime = () => {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let session = "AM"


        if (hh === 0) {
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
        if (session === "PM") {
            setDayTime(false)
        }
        else {
            setDayTime(true);
        }
        setTimeout(currentTime, 1000);

    }

    useEffect(() => {
        currentTime();
        getCurrentDate();
    })

    return (
        <>
            <header className='home-header'>
                <div className='home-header-left'>
                    <h3 className='current-weather'>CURRENT WEATHER</h3>
                    <Select.Root>
                        <Select.Trigger className='selectTrigger'>
                            <Select.Value placeholder="Lahore, Pakistan"/>
                            <Select.Icon />
                        </Select.Trigger>

                        <Select.Portal>
                            <Select.Content>
                                <Select.ScrollUpButton />
                                <Select.Viewport>
                                    <Select.Item>
                                        <Select.ItemText textValue=""/>    
                                        <Select.ItemIndicator />
                                    </Select.Item>

                                    <Select.Group>
                                        <Select.Label />
                                        <Select.Item>
                                            <Select.ItemText />
                                            <Select.ItemIndicator />
                                        </Select.Item>
                                    </Select.Group>

                                    <Select.Separator />
                                </Select.Viewport>
                                <Select.ScrollDownButton />
                            </Select.Content>
                        </Select.Portal>
                    </Select.Root>
                </div>
                <div className='home-header-right'>
                    <p id='date'>N/A</p>
                </div>

            </header>

            <main className='weather-main'>

                <div className='weather-main-left'>

                    {
                        dayTime ?
                            currentWeatherData.current_weather ?
                                <img src={weatherCodes[currentWeatherData.current_weather.weathercode].img} alt="..." />
                                :
                                null

                            :
                            currentWeatherData.current_weather ?
                                <img src={moonIcon} alt="..." />
                                :
                                null


                    }

                    {
                        currentWeatherData.current_weather ?
                            <p>{weatherCodes[currentWeatherData.current_weather.weathercode].status}</p>
                            :
                            <p>N/A</p>
                    }

                </div>
                <div className='weather-main-right'>
                    <div className='weather-temp-column'>
                        {
                            currentWeatherData.current_weather ?
                                <h1 className='weather-temper'>{currentWeatherData.current_weather.temperature}&deg;</h1>
                                :
                                <h1>N/A</h1>
                        }

                        <div className='temp-column-fields'>
                            <div className='weather-field'>
                                <p>Atmospheric Pressure</p>
                                {
                                    currentWeatherData.hourly ?
                                        <p className=''>{currentWeatherData.hourly.pressure_msl[recentDate]} hPa</p>
                                        :
                                        <p>N/A</p>
                                }
                            </div>
                            <div className='weather-field'>
                                <p>Wind Speed</p>
                                {
                                    currentWeatherData.current_weather ?
                                        <p className=''>{currentWeatherData.current_weather.windspeed} km/h</p>
                                        :
                                        <p>N/A</p>
                                }
                            </div>
                            <div className='weather-field'>
                                <p>Wind Direction</p>
                                {
                                    currentWeatherData.current_weather ?
                                        <p className=''>{currentWeatherData.current_weather.winddirection}&deg;</p>
                                        :
                                        <p>N/A</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='weather-time-column'>
                        <h1 className='weather-time' id='clock'>N/A</h1>
                        <div className='time-column-fields'>
                            <div className='weather-field'>
                                <p>Relative Humidity</p>
                                {
                                    currentWeatherData.hourly ?
                                        <p>{currentWeatherData.hourly.relativehumidity_2m[recentDate]}%</p>
                                        :
                                        <p>N/A</p>
                                }
                            </div>

                            <div className='weather-field'>
                                <p>Visbility</p>
                                {
                                    currentWeatherData.hourly ?
                                        <p>{(currentWeatherData.hourly.visibility[recentDate]) / 1000}%</p>
                                        :
                                        <p>N/A</p>
                                }
                            </div>
                            <div className='weather-field'>
                                <p>Direct Radiation</p>
                                {
                                    currentWeatherData.hourly ?
                                        <p>{currentWeatherData.hourly.direct_radiation[recentDate]} W/m&sup2;</p>
                                        // <p>None</p>
                                        :
                                        <p>N/A</p>
                                }

                            </div>
                        </div>

                    </div>

                </div>


            </main>

            <FutureWeather currentWeatherData={currentWeatherData} recentDate={recentDate} />

            <Footer />


        </>

    )
}

export default Home