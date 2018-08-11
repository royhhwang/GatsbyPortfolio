import React from 'react'
import { Fade, Flip } from 'react-reveal'
import '../scss/contact.scss'
import Git from "../media/github.png"
import Link from "../media/linkedin.png"

const Contact = () => (
    <div className="contact-layer" id="contact">
        <Fade top>
            <h1>Contact</h1>
        </Fade>
        <Fade left>
            <div className="icon-links hover-link">
                <a href="https://github.com/royhhwang" target="_blank"><img src={Git} alt="https://github.com/royhhwang" /><h3>GitHub</h3></a>
            </div>
            <div className="icon-links hover-link">
                <a href="https://www.linkedin.com/in/royhhwang/" target="_blank"><img src={Link} alt="https://www.linkedin.com/in/royhhwang/" /><h3>LinkedIn</h3></a>
            </div>
        </Fade>
    </div>
)

export default Contact
