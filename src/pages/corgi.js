import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import CorgiVideo from '../media/corgi.mp4'
import CorgiIcon from '../media/corgijpg.jpg'
import '../scss/project.scss'

const Corgi = () => (
  <div className="project-main">
    <Nav />
    <div className="display-layer wrapper">
      <Link className="icon-spin"
        to="/#projects"
      >
        <span className="dark-green-button">Back</span>
      </Link>
      <Fade>
        <h1 className="display-title"><span>Coding with Corgis</span></h1>
        <div className="video-container wrapper">
          <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
            <source src={CorgiVideo} type="video/mp4" />
            Your browser does not support this video!
        </video>
        </div>
      </Fade>
      <div className="project-content">
        <Fade left>
          <div className="project-description">
            <span style={{ fontSize: 22 + 'px' }}>Gamifying the Interview Process.</span>
            <br />
            <strong><span style={{ fontSize: 20 + 'px' }}>React.js | Unity 3D | 3ds Max</span></strong>
            <br />
            Simple, yet challenging puzzles test an applicant's problem-solving skills.
            <p style={{ lineHeight: 1.6 + 'em' }}>
              <br />
              <ul className="project-text">
                <li>Game Programmer: Tasked with creation of menus, transitions, and levels.</li>
                <li>Visual Editior: Mainainted visual integrity and thematic design aspects.</li>
                <li>UX/UI Designer: Priority on mobile development scalability.</li>
                <li>Deployed on AWS.</li>
              </ul>
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="half-display text-content">
            <img src={CorgiIcon} alt="coding with corgis page" className="round" />
            <br />
            <a className="dark-green-button icon-spin" href="https://royhhwang.itch.io/coding-with-corgis/" target="_blank" rel="noopener noreferrer">The Game</a>
            <br />
            <a className="dark-green-button icon-spin" href="http://www.codewithcorgis.com/" target="_blank" rel="noopener noreferrer">The Site</a>
            <br />
            <a className="dark-green-button icon-spin" href="https://github.com/royhhwang/CodeWithCorgis" target="_blank" rel="noopener noreferrer">The Repo</a>
            <br />
          </div>
        </Fade>
      </div>
    </div>
  </div >
)

export default Corgi
