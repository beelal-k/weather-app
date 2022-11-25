import React from 'react'
import '../scss/FutureWeather.scss'
import sunIcon from '../images/sunIcon3.svg'
import clearCloud from '../images/clearCloud.svg'
import rainyCloud from '../images/rainyCloud2.svg'
import cloudy from '../images/sunnyCloudy.svg'

const FutureWeather = () => {
    return (
        <>
            <div className='future-weather-parent'>
                <div className='fw-child'>
                    <img src={sunIcon} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p className='dates'>25-11-2022</p>
                </div>
              
                <div className='fw-child'>
                    <img src={clearCloud} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p className='dates'>25-11-2022</p>
                </div>
              
                <div className='fw-child'>
                    <img src={rainyCloud} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p className='dates'>25-11-2022</p>
                </div>
              
                <div className='fw-child'>
                    <img src={cloudy} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p className='dates'>25-11-2022</p>
                </div>
              
                <div className='fw-child'>
                    <img src={sunIcon} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p className='dates'>25-11-2022</p>
                </div>
              
                <div className='fw-child'>
                    <img src={sunIcon} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p className='dates'>25-11-2022</p>
                </div>
              
            </div>
        </>

    )
}

export default FutureWeather