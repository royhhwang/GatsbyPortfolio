import React from 'react'
import '../css/button.css'
import TopArrow from '../media/top-arrow.svg'
import {Fade} from 'react-reveal'

const Button = () => (
    <Fade bottom>
        <a href="#" className="top-button">
            <img src={TopArrow} alt="all the way up" />
        </a>
    </Fade>
)

export default Button