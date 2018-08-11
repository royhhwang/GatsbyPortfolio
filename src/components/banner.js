import React from 'react'
import { Fade, Reveal } from 'react-reveal'
import Nav from './nav.js'
import Background from '../media/banner-bg.jpg'
import Face from '../media/rightbanner.jpg'
import '../scss/banner.scss'

const Banner = () => (
    <header className="banner" style={{backgroundImage: "url(" + Background  + ")"}}>
        <Nav />
        <div className="banner-wrapper wrapper">
            <div className="banner-content">
                <h1>
                    <span className="banner-title">Roy</span>
                    <span className="banner-title">Hwang</span>
                </h1>
                <p className="banner-subtitle">Fullstack Developer</p>
            </div>
                <img className="banner-img" src={Face} alt="Roy Hwang - Fullstack Developer" />
        </div>
    </header>
)

export default Banner
