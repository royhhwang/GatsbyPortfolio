import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import WombatVideo from '../media/wombat.mp4'
import WombatIcon from '../media/wombatmain.png'
import '../scss/project.scss'

const Wombat = () => (
  <div className="project-main">
    <Nav />
    <div className="display-layer wrapper">
      <Link className="icon-spin"
        to="/#projects"
      >
        <span className="dark-green-button">Back</span>
      </Link>
      <Fade>
        <h1 className="display-title"><span>Project Wombat</span></h1>
        <div className="video-container wrapper">
          <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
            <source src={WombatVideo} type="video/mp4" />
            Your browser does not support this video!
          </video>
        </div>
      </Fade>
      <div className="project-content">
        <Fade left>
          <div className="project-description">
            <h2 className="heading">Location-based Statistics</h2>
            <p className="tech"><strong>MERN Stack | Sass | Gulp | AJAX</strong></p>
            <p className="blurb">Project Wombat combines Google Maps with the Bureau of Labor Statistics API to create an interactive map of employment data.</p>
            <div className="task-content" style={{ lineHeight: 1.6 + 'em' }}>
              <br />
              <ul className="project-text">
                <li>Modularized search for high employment rates across Southern California.</li>
                <li>Removes the tedium of scouring government websites.</li>
                <li>Built with the MERN stack, Sass, and Gulp.</li>
              </ul>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="half-display text-content">
            <img src={WombatIcon} alt="coding with corgis page" className="round" />
            <br />
            <a className="dark-green-button icon-spin" href="https://github.com/W0mb4t/WombatPower" target="_blank" rel="noopener noreferrer">The Repo</a>
            <br />
          </div>
        </Fade>
      </div>
    </div>
  </div >
)

export default Wombat
