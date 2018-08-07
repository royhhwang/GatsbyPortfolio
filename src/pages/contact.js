import React from 'react'
import { Fade, Flip } from 'react-reveal'
import '../css/contact.css'

const Contact = () => (
    <div className="about-layer" id="about">
        <Fade bottom>
            <h1>About</h1>
        </Fade>
        <Fade>
            <p className="about-para">I am a Full Stack Developer and Front End Designer proficient in the MERN stack and JavaScript.
                I help companies build creative and inspired webpages using my unique mix of game programming history and visual chops.
            </p>
            <p className="about-para">Previously, I worked as a Sales Associate assigned to the Los Angeles and Palm Springs region, tasked with managing over 120 separate accounts.
                Within 2 years, I achieved 140% profit over budget and greatly expanded company influence in Palm Springs and Indio.
            </p>
        </Fade>
    </div>
)

export default Contact