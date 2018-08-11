import React from 'react'
import { Fade, Flip } from 'react-reveal'
import Resume from '../media/resume.pdf'
import '../scss/about.scss'

const About = () => (
    <div className="about-layer wrapper" id="about">
        <Fade top>
            <h1>About</h1>
        </Fade>
        <Fade left>
            <div className="about-para about-one">
                <p>I'm a <strong>Full Stack Developer</strong> and <strong>Front End Designer</strong> proficient in JavaScript and the MERN stack.
                    I build stunning designs and interfaces using my unique mix of <strong>game programming and problem-solving skills.</strong>
                    <strong> Games</strong> have been a big part of my life, and its impact shows through my work.
                    I love to blend the two together to create <strong>visual and interactive</strong> artpieces.
                </p>
                <hr style={{ marginTop: 1 + 'em', marginBottom: 1 + 'em' }} />
                <p className="about-bottom">
                    In a previous life, I worked extensively as a <strong>sales associate</strong>, an invaluable experience that honed my organizational and interpersonal skills.
                    <br />
                    <br />
                    When I'm not coding, I'm out hitting the gym, hiking with Pokemon Go, or lounging at Starbucks with a cold drink.
                </p>
            </div>
        </Fade>
        <div className="about-para about-two">
            <a href={Resume} className="resume-layer" target="_blank" rel="noopener noreferrer">View Resume</a>
            <hr className="mobile-hide" style={{ margin: 1.5 + 'em' }} />
            <Fade right>
                <ul className="exp-para">
                    <li>
                        <h3 className="exp-title para-top">
                            The Coding Boot Camp &nbsp;<strong>|</strong>&nbsp;  UCI
                        </h3>
                        <p className="exp-sub">Student</p>
                        <p>Oct 2017 - Jan 2018</p>
                    </li>

                    <li>
                        <h3 className="exp-title">
                            Wismettac Asian Foods
                        </h3>
                        <p className="exp-sub">Sales Associate</p>
                        <p>Aug 2015 - May 2017</p>
                    </li>

                    <li>
                        <h3 className="exp-title">
                            New Japan Food Corporation
                        </h3>
                        <p className="exp-sub">Sales and Marketing Intern</p>
                        <p>Jun 2013 - Aug 2013</p>
                    </li>
                    <li>
                        <h3 className="exp-title">
                            Hadicun Oriental Giant
                        </h3>
                        <p className="exp-sub">Sales and Business Development Intern</p>
                        <p>Jun 2012 - Sep 2012</p>
                    </li>
                </ul>
            </Fade>
        </div>
    </div>
)

export default About
