import React from 'react'
import '../scss/FutureWeather.scss'
import sunIcon from '../images/sunIcon3.svg'
import { weatherCodes } from "../weatherCodes";

const FutureWeather = ({ currentWeatherData, }) => {
    return (
        <>
            <div className='future-weather-parent'>
                <div className='fw-child'>
                    {/* <img src={sunIcon} className="fw-sunIcon" /> */}
                    {
                        currentWeatherData.hourly ?
                            <img src={weatherCodes[currentWeatherData.hourly.weathercode[34]].img} className="fw-sunIcon" alt="..." />
                            :
                            <img src={sunIcon} className="fw-sunIcon"  alt="..."/>
                    }
                    {
                        currentWeatherData.hourly ?
                            <h2>{currentWeatherData.hourly.temperature_2m[34]}</h2>
                            :
                            <p>N/A</p>
                    }
                    {
                        currentWeatherData.hourly ?
                            <p>{weatherCodes[currentWeatherData.hourly.weathercode[34]].status}</p>
                            :
                            <p>N/A</p>
                    }
                </div>

                <div className='fw-child'>
                    {
                        currentWeatherData.hourly ?
                            <img src={weatherCodes[currentWeatherData.hourly.weathercode[58]].img} className="fw-sunIcon" alt="..." />
                            :
                            <img src={sunIcon} className="fw-sunIcon"  alt="..."/>
                    }
                    {
                        currentWeatherData.hourly ?
                            <h2>{currentWeatherData.hourly.temperature_2m[58]}</h2>
                            :
                            <p>N/A</p>
                    }
                    {
                        currentWeatherData.hourly ?
                            <p>{weatherCodes[currentWeatherData.hourly.weathercode[58]].status}</p>
                            :
                            <p>N/A</p>
                    }
                </div>

                <div className='fw-child'>
                    {
                        currentWeatherData.hourly ?
                            <img src={weatherCodes[currentWeatherData.hourly.weathercode[82]].img} className="fw-sunIcon" alt="..." />
                            :
                            <img src={sunIcon} className="fw-sunIcon"  alt="..."/>
                    }
                    {
                        currentWeatherData.hourly ?
                            <h2>{currentWeatherData.hourly.temperature_2m[82]}</h2>
                            :
                            <p>N/A</p>
                    }

                    {
                        currentWeatherData.hourly ?
                            <p>{weatherCodes[currentWeatherData.hourly.weathercode[82]].status}</p>
                            :
                            <p>N/A</p>
                    }
                </div>

                <div className='fw-child'>
                    {
                        currentWeatherData.hourly ?
                            <img src={weatherCodes[currentWeatherData.hourly.weathercode[106]].img} className="fw-sunIcon" alt="..." />
                            :
                            <img src={sunIcon} className="fw-sunIcon"  alt="..."/>
                    }
                    {
                        currentWeatherData.hourly ?
                            <h2>{currentWeatherData.hourly.temperature_2m[106]}</h2>
                            :
                            <p>N/A</p>
                    }
                    {
                        currentWeatherData.hourly ?
                            <p>{weatherCodes[currentWeatherData.hourly.weathercode[106]].status}</p>
                            :
                            <p>N/A</p>
                    }
                </div>

                <div className='fw-child'>
                    {
                        currentWeatherData.hourly ?
                            <img src={weatherCodes[currentWeatherData.hourly.weathercode[130]].img} className="fw-sunIcon"  alt="..."/>
                            :
                            <img src={sunIcon} className="fw-sunIcon"  alt="..."/>
                    }

                    {
                        currentWeatherData.hourly ?
                            <h2>{currentWeatherData.hourly.temperature_2m[130]}</h2>
                            :
                            <p>N/A</p>
                    }
                    {
                        currentWeatherData.hourly ?
                            <p>{weatherCodes[currentWeatherData.hourly.weathercode[130]].status}</p>
                            :
                            <p>N/A</p>
                    }
                </div>

                <div className='fw-child'>
                    {
                        currentWeatherData.hourly ?
                            <img src={weatherCodes[currentWeatherData.hourly.weathercode[154]].img} className="fw-sunIcon" alt="..."/>
                            :
                            <img src={sunIcon} className="fw-sunIcon"  alt="..."/>
                    }
                    <div>
                        {
                            currentWeatherData.hourly ?
                                <h2>{currentWeatherData.hourly.temperature_2m[154]}</h2>
                                :
                                <p>N/A</p>
                        }
                        {
                            currentWeatherData.hourly ?
                                <p>{weatherCodes[currentWeatherData.hourly.weathercode[154]].status}</p>
                                :
                                <p>N/A</p>
                        }
                    </div>
                </div>

            </div>
        </>

    )
}

export default FutureWeather