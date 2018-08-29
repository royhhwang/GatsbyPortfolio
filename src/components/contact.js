import React from 'react'
import { Fade } from 'react-reveal'
import '../scss/contact.scss'
import Background from '../media/palms.jpg'
import Git from "../media/github.png"
import Link from "../media/linkedin.png"
import Gmail from "../media/gmail.svg"

const Contact = () => (
    <div className="contact-layer wrapper" id="contact">
        <Fade top>
            <h1 className="section-header contact-title">Contact</h1>
        </Fade>
        <Fade left>
            <div>
                <div className="leaves-button contact-section" style={{ backgroundColor: "transparent" }}>
                    <a href="https://github.com/royhhwang" target="_blank" className="leaves-orange-link">
                        <img className="leaves-button-img" src={Git} alt="https://github.com/royhhwang" />
                        <p className="leaves-button-label"> GitHub</p>
                    </a>
                </div>
            </div>
            <br />
            <div>
                <div className="leaves-button contact-section" style={{ backgroundColor: "transparent" }}>
                    <a href="https://www.linkedin.com/in/royhhwang/" target="_blank" className="leaves-orange-link">
                        <img className="leaves-button-img" src={Link} alt="https://www.linkedin.com/in/royhhwang/" />
                        <p className="leaves-button-label"> LinkedIn</p>
                    </a>
                </div>
            </div>
            <br />
            <div>
                <div className="leaves-button contact-section" style={{ backgroundColor: "transparent" }}>
                    <a href="mailto:royhhwang@gmail.com" target="_blank" className="leaves-orange-link">
                        <img className="leaves-button-img" src={Gmail} alt="https://www.linkedin.com/in/royhhwang/" />
                        <p className="leaves-button-label"> Email</p>
                    </a>
                </div>
            </div>
        </Fade>
    </div>
)

export default Contact
