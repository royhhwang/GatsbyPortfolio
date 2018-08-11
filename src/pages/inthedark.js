import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import Arrow from '../media/arrow.png'
import DarkVideo from '../media/spooky.mp4'
import DarkIcon from '../media/ring.jpg'
import '../scss/project.scss'

const Dark = () => (
  <div>
    <Nav />
    <div className="display-layer">
      <Link className="back-button icon-spin"
        to="/#projects"
      >
        <Fade top>
          <img src={Arrow} alt="back button" />
        </Fade>
      </Link>
      <Fade top>
        <h1 className="display-title">In the Dark</h1>
      </Fade>
      <Fade left>
        <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
          <source src={DarkVideo} type="video/mp4" />
          Your browser does not support this video!
        </video>
      </Fade>
      <Fade right>
        <div className="half-display text-content">
          <a href="https://royhhwang.github.io/inthedark/?" target="_blank" rel="noopener noreferrer"><img src={DarkIcon} alt="In the Dark Page" className="icon-spin round" /><br />Visit the site!</a>
          <hr style={{ margin: 20 + "px" }} />
          <a href="https://github.com/royhhwang/inthedark/" target="_blank" rel="noopener noreferrer">Visit the repo!</a>
          <br />
        </div>
      </Fade>
    </div>
  </div >
)

export default Dark
