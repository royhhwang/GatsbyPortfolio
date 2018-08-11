import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Header from '../components/header.js'
import Arrow from '../media/arrow.png'
import ArtsyVideo from '../media/artsy.mp4'
import ArtsyIcon from '../media/artsyjpg.jpg'
import '../scss/project.scss'

const Artsy = () => (
  <div>
    <Header />
    <div className="display-layer">
      <Link className="back-button icon-spin"
        to="/#projects"
      >
        <Fade top>
          <img src={Arrow} alt="back button" />
        </Fade>
      </Link>
      <Fade top>
        <h1 className="display-title">Artsy</h1>
      </Fade>
      <Fade left>
        <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
          <source src={ArtsyVideo} type="video/mp4" />
          Your browser does not support this video!
        </video>
      </Fade>
      <Fade right>
        <div className="half-display text-content">
          <a href="https://artsyapi.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={ArtsyIcon} alt="Artsy Page" className="icon-spin" /><br />Visit the site!</a>
          <hr style={{ margin: 20 + "px" }} />
          <a href="https://github.com/royhhwang/artsyapi" target="_blank" rel="noopener noreferrer">Visit the repo!</a>
          <br />
        </div>
      </Fade>
    </div>
  </div >
)

export default Artsy
