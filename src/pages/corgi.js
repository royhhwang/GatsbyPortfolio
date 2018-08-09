import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Header from '../components/header.js'
import Arrow from '../media/arrow.png'
import CorgiVideo from '../media/corgi.mp4'
import CorgiIcon from '../media/corgi.jpg'
import '../css/project.css'

const Corgi = () => (
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
        <h1 className="display-title">Coding with Corgis</h1>
      </Fade>
      <Fade left>
        <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
          <source src={CorgiVideo} type="video/mp4" />
          Your browser does not support this video!
        </video>
      </Fade>
      <Fade right>
        <div className="half-display text-content">
          <a href="http://www.codewithcorgis.com/" target="_blank" rel="noopener noreferrer"><img src={CorgiIcon} alt="corgi page" className="icon-spin" /><br />Visit the site!</a>
          <hr style={{ margin: 20 + "px" }} />
          <a href="https://github.com/royhhwang/CodeWithCorgis" target="_blank" rel="noopener noreferrer">Visit the repo!</a>
          <br />
        </div>
      </Fade>
    </div>
  </div >
)

export default Corgi
