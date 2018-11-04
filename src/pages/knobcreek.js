import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import KnobVid from '../media/barrel.mp4'
import KnobIcon from '../media/knobcreek.jpeg'
import '../scss/project.scss'

const KnobCreek = () => (
  <div className="project-main">
    <Nav />
    <div className="display-layer wrapper">
      <Link className="icon-spin"
        to="/#projects"
      >
        <span className="dark-green-button">Back</span>
      </Link>
      <Fade>
        <h1 className="display-title"><span>Knob Creek</span></h1>
        <div className="video-container wrapper">
          <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
            <source src={KnobVid} type="video/mp4" />
            Your browser does not support this video!
          </video>
        </div>
      </Fade>
      <div className="project-content">
        <Fade left>
          <div className="project-description">
            <h2 className="heading">Building with Static Templates</h2>
            <p className="tech"><strong>WordPress | Twig/Timber | Pantheon | Gulp</strong></p>
            <p className="blurb">A recreation of KnobCreek's front page.</p>
            <div className="task-content" style={{ lineHeight: 1.6 + 'em' }}>
              <br />
              <ul className="project-text">
              <li>WordPress and WordPress custom themes created.</li>
              <li>Panteon.io used for deployment.</li>
              <li>PHP and Twig/Timber plugin used to dynamically create from posts.</li>
              <li>BEM CSS and semantic HTML.</li>
              <li>Best practices for modular, responsive, readable code.</li>
              </ul>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="half-display text-content">
            <img src={KnobIcon} alt="In the Dark Page" className="round" />
            <br />
            <a className="dark-green-button icon-spin" href="http://dev-rh-barrel.pantheonsite.io" target="_blank" rel="noopener noreferrer">The Site</a>
            <br />
            <a className="dark-green-button icon-spin" href="https://github.com/royhhwang/rh-barrel-test" target="_blank" rel="noopener noreferrer">The Repo</a>
            <br />
          </div>
        </Fade>
      </div>
    </div>
  </div >
)

export default KnobCreek
