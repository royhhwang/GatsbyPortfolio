import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Header from '../components/header.js'
import Arrow from '../media/arrow.png'
import WombatVideo from '../media/wombat.mp4'
import WombatIcon from '../media/wombatmain.png'
import '../css/project.css'

const Wombat = () => (
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
        <h1 className="display-title">Project Wombat</h1>
      </Fade>
      <Fade left>
        <video className="half-display" controls="true" playsInline muted autoPlay loop>
          <source src={WombatVideo} type="video/mp4" />
          Your browser does not support this video!
        </video>
      </Fade>
      <Fade right>
        <div className="half-display text-content">
          <img src={WombatIcon} alt="corgi page" className="icon-spin round" /><br />
          <hr style={{ margin: 20 + "px" }} />
          <a href="https://github.com/W0mb4t/WombatPower" target="_blank" rel="noopener noreferrer">Visit the repo!</a>
          <br />
        </div>
      </Fade>
    </div>
  </div >
)

export default Wombat
