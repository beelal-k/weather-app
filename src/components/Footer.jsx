import React from 'react'
import '../scss/Footer.scss'
import emailIcon from '../images/emailIcon.svg'
import githubIcon from '../images/githubIcon.svg'

const Footer = () => {
    return (
        <>
            <div className='footer-main'>
                <div className='footer-child'>
                    <img src={githubIcon} alt="..." />
                    <p><a href='https://github.com/beelal-k/weather-app'>github.com/beelal-k/weather-app</a></p>
                </div>
                {/* <div className='footer-child'>
                    <img src={linkedinIcon} />
                    <p><a>linkedin.com/in/bilalk902</a></p>
                </div> */}
                <div className='footer-child'>
                    <img src={emailIcon} alt="..."/>
                    <p>bilalk.dev@gmail.com</p>
                </div>
            </div>
        </>

    )
}

export default Footer