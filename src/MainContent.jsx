import React from 'react'
import './MainContent.css'
import linkedin from './assets/linkedin.svg'
import google from './assets/google.svg'
import Github from './assets/github.svg'
import Me from './assets/Lme.png'
import linkedin2 from './assets/linkedin2.svg'
import gmail from './assets/gmail2.svg'


export default function MainContent(){
    return (
        <>
             <div className='container'>
                <div className="img-container">
                    <img src={Me} alt="" className="main-img" />
                </div>
                <div className="sub-container">
                    <h2 classNAme="name">La'Vonte Wallace</h2>
                    <h3 className="role">Full Stack Developer </h3>
                    <h5 className=""></h5>
                    <div className="connect">
                        <a href="https://Lavonte.wallace7@gmail.com" className="mail"><img src={gmail} alt="" />Email</a>
                        <a href="https://www.linkedin.com/in/lavonte-wallace-78304a28a/" className="linkedin"><img src={linkedin2} alt="" />Linkedin</a>

                    </div>
                    <div className="about">
                        <h3>About</h3>
                        <p>I am an aspiring Full-Stack Developer. I am constantly learning and adopting new techniques and knowledge related to my future career. </p>
                         </div>
                         <div className="interest">
                            <h3>interests</h3>
                            <p>Finance. Music. Art. Technology. Animation. Health. I love connectiong with new people.</p>
                         </div>
                    </div>
                    <div className="footer">
                        <a href="https://www.linkedin.com/in/lavonte-wallace-78304a28a/" ><img className='linkedinn' src={linkedin} alt="linkedin" /></a>
                        <a href="https://github.com/Vontay777"> <img className='Github' src={Github} alt="Github" /></a>
                        <a href="https://Lavonte.wallace7@gmail.com"> <img className='google' src={google} alt="google" /></a>
                    </div>
                </div>
            



        </>
    )
}