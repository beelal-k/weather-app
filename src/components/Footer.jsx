import React from 'react'
import '../scss/Footer.scss'
import emailIcon from '../images/emailIcon.svg'
import githubIcon from '../images/githubIcon.svg'
import linkedinIcon from '../images/linkedIcon.svg'

const Footer = () => {
    return (
        <>
            <div className='footer-main'>
                <div className='footer-child'>
                    <img src={githubIcon} />
                    <p><a href='https://github.com/beelal-k'>github.com/beelal-k</a></p>
                </div>
                {/* <div className='footer-child'>
                    <img src={linkedinIcon} />
                    <p><a>linkedin.com/in/bilalk902</a></p>
                </div> */}
                <div className='footer-child'>
                    <img src={emailIcon}/>
                    <p><a>bilalk.dev@gmail.com</a></p>
                </div>
            </div>
        </>

    )
}

export default Footer