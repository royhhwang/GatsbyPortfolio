import React from 'react'
import { Fade, Reveal } from 'react-reveal'
import Nav from './nav.js'
import Face from '../media/rightbanner.jpg'
import '../scss/banner.scss'

const Banner = () => (
    <header className="banner-layer">
        <Nav />
        <div className="wrapper">
            <div className="banner-content">
                <h1>Roy Hwang</h1>
                <img src={Face} alt="Roy Hwang - Fullstack Developer" />
            </div>
        </div>
    </header>
)

export default Banner
