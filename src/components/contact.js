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
            <div>
                <div className="leaves-button contact-section" style={{ backgroundImage: "url(" + Background + ")" }}>
                    <a href="https://github.com/royhhwang" target="_blank" className="leaves-button-link">
                        <img className="leaves-button-img" src={Git} alt="https://github.com/royhhwang" />
                        <p className="leaves-button-label">GitHub</p>
                    </a>
                </div>
            </div>
            <br />
            <div>
                <div className="leaves-button contact-section" style={{ backgroundImage: "url(" + Background + ")" }}>
                    <a href="https://www.linkedin.com/in/royhhwang/" target="_blank" className="leaves-button-link">
                        <img className="leaves-button-img" src={Link} alt="https://www.linkedin.com/in/royhhwang/" />
                        <p className="leaves-button-label">LinkedIn</p>
                    </a>
                </div>
            </div>
        </Fade>
    </div>
)

export default Contact
