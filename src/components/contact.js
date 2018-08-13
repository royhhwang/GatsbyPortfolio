import React from 'react'
import { Fade } from 'react-reveal'
import '../scss/contact.scss'
import Background from '../media/banner-bg.jpg'
import Git from "../media/github.png"
import Link from "../media/linkedin.png"

const Contact = () => (
    <div className="contact-layer wrapper" id="contact">
        <Fade top>
            <h1 className="section-header contact-title">Contact</h1>
        </Fade>
        <Fade left>
            <div className="leaves-button contact-section" style={{ backgroundImage: "url(" + Background + ")" }}>
                <a href="https://github.com/royhhwang" target="_blank" className="leaves-button-link"><img src={Git} alt="https://github.com/royhhwang" /><h3>GitHub</h3></a>
            </div>
            <br />
            <div className="leaves-button contact-section" style={{ backgroundImage: "url(" + Background + ")" }}>
                <a href="https://www.linkedin.com/in/royhhwang/" target="_blank" className="leaves-button-link"><img src={Link} alt="https://www.linkedin.com/in/royhhwang/" /><h3>LinkedIn</h3></a>
            </div>
        </Fade>
    </div>
)

export default Contact
