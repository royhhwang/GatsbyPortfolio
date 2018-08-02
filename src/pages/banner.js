import React from 'react'
import Link from 'gatsby-link'
import { Fade, Flip } from 'react-reveal'
import Title from '../media/leftbanner.jpg'
import Face from '../media/rightbanner.jpg'
import '../css/banner.css'

const Banner = () => (
    <div className="banner-layer" id="#top">
        <Fade top>
            <img src={Title} alt="roy title" className="banner-block title-block" id="left-face" />
            <a href="#top">
                <Fade>
                    <img src={Face} alt="roy face" className="banner-block face-block" id="right-face" />
                </Fade>
            </a>
        </Fade>
    </div>
)

export default Banner