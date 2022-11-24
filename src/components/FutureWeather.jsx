import React from 'react'
import '../scss/FutureWeather.scss'
import sunIcon from '../images/sunIcon3.svg'

const FutureWeather = () => {
    return (
        <>
            <div className='future-weather-parent'>
                <div className='fw-child'>
                    <img src={sunIcon} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p>25-11-2022</p>
                </div>
              
                <div className='fw-child'>
                    <img src={sunIcon} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p>25-11-2022</p>
                </div>
              
                <div className='fw-child'>
                    <img src={sunIcon} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p>25-11-2022</p>
                </div>
              
                <div className='fw-child'>
                    <img src={sunIcon} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p>25-11-2022</p>
                </div>
              
                <div className='fw-child'>
                    <img src={sunIcon} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p>25-11-2022</p>
                </div>
              
                <div className='fw-child'>
                    <img src={sunIcon} className="fw-sunIcon" />
                    <h2>24.5</h2>
                    <p>Clear Sky</p>
                    <p>25-11-2022</p>
                </div>
              
            </div>
        </>

    )
}

export default FutureWeather