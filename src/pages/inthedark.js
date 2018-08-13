import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import Arrow from '../media/arrow.png'
import DarkVideo from '../media/spooky.mp4'
import DarkIcon from '../media/ring.jpg'
import '../scss/project.scss'

const Dark = () => (
  <div className="project-main">
    <Nav />
    <div className="display-layer wrapper">
      <Link className="icon-spin"
        to="/#projects"
      >
        <span className="dark-green-button">Back</span>
      </Link>
      <Fade bottom>
        <h1 className="display-title"><span>In the Dark</span></h1>
        <div className="video-container wrapper">
          <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
            <source src={DarkVideo} type="video/mp4" />
            Your browser does not support this video!
          </video>
        </div>
      </Fade>
      <div className="project-content">
        <Fade left>
          <div className="project-description">
            <span style={{ fontSize: 22 + 'px' }}>Horror Web VR</span>
            <br />
            <strong><span style={{ fontSize: 20 + 'px' }}> React.js | AFrame.js | Parallax.js | 3ds Max</span></strong>
            <p style={{ lineHeight: 1.6 + 'em' }}>
              <br />
              <ul className="project-text">
                <li>Web VR built through AFrame.js and Parallax.js.</li>
                <li>Combined with IGDB API's game database.</li>
                <li>React handles mouse events and routing.</li>
                <li>Models created through 3ds Max.</li>
              </ul>
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="half-display text-content">
            <img src={DarkIcon} alt="In the Dark Page" className="round" />
            <br />
            <a className="dark-green-button icon-spin" href="https://royhhwang.github.io/inthedark/?" target="_blank" rel="noopener noreferrer">The Site</a>
            <br />
            <a className="dark-green-button icon-spin" href="https://github.com/royhhwang/inthedark/" target="_blank" rel="noopener noreferrer">The Repo</a>
            <br />
          </div>
        </Fade>
      </div>
    </div>
  </div >
)

export default Dark
