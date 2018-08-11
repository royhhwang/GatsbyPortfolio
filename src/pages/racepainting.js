import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import Arrow from '../media/arrow.png'
import RaceVideo from '../media/racevelocity.mp4'
import RaceIcon from '../media/taiyaki.png'
import '../scss/project.scss'

const Race = () => (
  <div>
    <Nav />
    <div className="display-layer">
      <Link className="dark-green-btn icon-spin"
        to="/#projects"
      >
        <Fade top>
          <img src={Arrow} alt="back button" />
        </Fade>
      </Link>
      <Fade top>
        <h1 className="display-title">Race Painting</h1>
      </Fade>
      <Fade left>
        <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
          <source src={RaceVideo} type="video/mp4" />
          Your browser does not support this video!
        </video>
      </Fade>
      <Fade right>
        <div className="half-display text-content">
          <a href="https://race-painting.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src={RaceIcon} alt="race painting page" className="icon-spin round" /><br />Visit the site!</a>
          <hr style={{ margin: 20 + "px" }} />
          <a href="https://github.com/Ta1yak1/Race-Paint" target="_blank" rel="noopener noreferrer">Visit the repo!</a>
          <br />
        </div>
      </Fade>
    </div>
  </div >
)

export default Race
