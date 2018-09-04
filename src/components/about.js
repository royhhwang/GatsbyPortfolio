import React from 'react'
import { Fade, Flip } from 'react-reveal'
import Resume from '../media/Roy Hwang Resume 2018.pdf'
import Background from '../media/banner-bg.jpg'
import '../scss/about.scss'

const About = () => (
    <div className="about-layer wrapper" id="about">
        <Fade top>
            <h1 className="section-header">About</h1>
        </Fade>
        <div className="about-content">
            <Fade left>
                <div className="about-para about-one">
                    <p>I’m a <strong>full stack developer</strong> specializing in <strong>Javascript</strong> and the <strong>MERN</strong> stack. A gamer at heart, I bring experience in game programming and design to solve problems with imaginative, out-of-the-box solutions. I'm as happy doing <strong>Unity 3D</strong> as I am <strong>CSS</strong>.
                    </p>
                    <br />
                    <p>
                        In a past life, I worked as a <strong>jack-of-all-trades</strong> sales associate managing direct relationships with 120+ companies in the LA region, including Nobu, Matsuhisa, and the Marriott Hotel.
                    </p>
                    <p className="about-bottom">
                        I'm <strong>currently seeking</strong> a creative role that will allow me to blend my passions for interactive UI and game design. Happy to relocate for my next adventure.
                    </p>
                </div>
            </Fade>
            <Fade right>
                <div className="about-para about-two">
                    <ul className="exp-para">
                        <li className="exp-para-item">
                            <h3 className="exp-title para-top">
                                The Coding Boot Camp &nbsp;|&nbsp;  UCI
                            </h3>
                            <p className="exp-sub">Student</p>
                            <p className="exp-sub -date">Oct 2017 - Jan 2018</p>
                        </li>

                        <li className="exp-para-item">
                            <h3 className="exp-title">
                                Fullstack Development
                            </h3>
                            <p className="exp-sub">JavaScript ES5 / ES6</p>
                            <p className="exp-sub">HTML5</p>
                            <p className="exp-sub">CSS3</p>
                            <p className="exp-sub">Node.js</p>
                            <p className="exp-sub">Express.js</p>
                            <p className="exp-sub">React.js</p>
                            <p className="exp-sub">MongoDB</p>
                            <p className="exp-sub">jQuery</p>
                            <p className="exp-sub">Sass</p>
                            <p className="exp-sub">Gatsby.js</p>
                        </li>
                    </ul>

                    <div className="leaves-button" style={{backgroundImage: "url(" + Background  + ")"}}>
                        <a href={Resume} className="leaves-button-link" target="_blank" rel="noopener noreferrer">View Resume</a>
                    </div>
                </div>
            </Fade>
        </div>
    </div>
)

export default About
