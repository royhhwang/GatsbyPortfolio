import React from 'react'
import Link from 'gatsby-link'
import { Fade, Flip } from 'react-reveal'
import Title from '../media/leftbanner.jpg'
import Face from '../media/rightbanner.jpg'
import '../css/banner.css'

const Banner = () => (
    <div className="banner-layer" id="#top">
        <Fade top>
            <div className="banner-block title-block">
                <img src={Title} alt="roy title" id="left-face" />
            </div>
        </Fade>
        <Fade right>
            <div className="banner-block face-block">
                <a href="#about">
                    <img src={Face} alt="roy face" id="right-face" />
                </a>
            </div>
        </Fade>
    </div>
)

export default Banner