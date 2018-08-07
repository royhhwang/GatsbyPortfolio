import React from 'react'
import { Fade, Flip } from 'react-reveal'
import '../css/about.css'

const About = () => (
    <div className="about-layer" id="about">
        <Fade top>
            <h1>About</h1>
        </Fade>
        <Fade left>
            <div className="about-para about-one">
                <p>I am a Full Stack Developer and Front End Designer proficient in the MERN stack and JavaScript.
                    I help companies build creative and inspired webpages using my unique mix of game programming history and visual chops.
            </p>
                <p>Previously, I worked as a Sales Associate assigned to the Los Angeles and Palm Springs region, tasked with managing over 120 separate accounts.
                    Within 2 years, I achieved 140% profit over budget and greatly expanded company influence in Palm Springs and Indio.
            </p>
            </div>
        </Fade>
        <Fade right>
            <div className="about-para about-two">
                <p>I am a Full Stack Developer and Front End Designer proficient in the MERN stack and JavaScript.
                </p>
            </div>
        </Fade>
    </div>
)

export default About