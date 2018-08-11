import React from 'react'
import { Fade, Flip } from 'react-reveal'
import Resume from '../media/resume.pdf'
import '../scss/about.scss'

const About = () => (
    <div className="about-layer wrapper" id="about">
        <Fade top>
            <h1 className="section-header">About</h1>
        </Fade>
        <div className="about-content">
            <Fade left>
                <div className="about-para about-one">
                    <p>I'm a <strong>Full Stack Developer</strong> and <strong>Front End Designer</strong> proficient in JavaScript and the MERN stack.
                        I build stunning designs and interfaces using my unique mix of <strong>game programming and problem-solving skills.</strong>
                        <strong> Games</strong> have been a big part of my life, and its impact shows through my work.
                        I love to blend the two together to create <strong>visual and interactive</strong> artpieces.
                    </p>
                    <p className="about-bottom">
                        In a previous life, I worked extensively as a <strong>sales associate</strong>, an invaluable experience that honed my organizational and interpersonal skills.
                        <br />
                        <br />
                        When I'm not coding, I'm out hitting the gym, hiking with Pokemon Go, or lounging at Starbucks with a cold drink.
                    </p>
                </div>
            </Fade>
            <Fade right>
                <div className="about-para about-two">
                {/* <a href={Resume} className="resume-layer" target="_blank" rel="noopener noreferrer">View Resume</a> */}
                {/* <hr className="mobile-hide" style={{ margin: 1.5 + 'em' }} /> */}
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
                </div>
            </Fade>
        </div>
    </div>
)

export default About
