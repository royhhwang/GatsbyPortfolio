import React from 'react'
import { Fade, Flip } from 'react-reveal'
import Resume from '../media/resume.pdf'
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
                        In a past life, I worked as a <strong>jack-of-all-trades</strong> sales associate managing direct relationships with 120+ companies in the LA region, including Nobu, Hilton, and _FILL IN HERE__.
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
                            <p className="exp-sub">Oct 2017 - Jan 2018</p>
                        </li>

                        <li className="exp-para-item">
                            <h3 className="exp-title">
                                Wismettac Asian Foods
                            </h3>
                            <p className="exp-sub">Sales Associate</p>
                            <p className="exp-sub">Aug 2015 - May 2017</p>
                        </li>

                        <li className="exp-para-item">
                            <h3 className="exp-title">
                                New Japan Food Corporation
                            </h3>
                            <p className="exp-sub">Sales and Marketing Intern</p>
                            <p className="exp-sub">Jun 2013 - Aug 2013</p>
                        </li>
                        <li className="exp-para-item">
                            <h3 className="exp-title">
                                Hadicun Oriental Giant
                            </h3>
                            <p className="exp-sub">Sales and Business Development Intern</p>
                            <p className="exp-sub">Jun 2012 - Sep 2012</p>
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
