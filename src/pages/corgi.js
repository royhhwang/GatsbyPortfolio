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
            <h2 className="heading">Gamifying the Interview Process</h2>
            <p className="tech"><strong>React | Unity 3D | 3ds Max | MERN Stack | HTML5 | CSS3</strong></p>
            <p className="blurb">Simple, yet challenging puzzles test an applicant's problem-solving skills.</p>
            <div className="task-content" style={{ lineHeight: 1.6 + 'em' }}>
              <br />
              <ul className="project-text">
                <li>Game Programmer: Tasked with creation of menus, transitions, and levels.</li>
                <li>Visual Editor: Maintained visual integrity and thematic design aspects.</li>
                <li>UX/UI Designer: Priority on mobile development and scalability.</li>
                <li>Deployed on AWS.</li>
              </ul>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="half-display text-content">
            <img src={CorgiIcon} alt="coding with corgis page" className="round" />
            <br />
            <a className="dark-green-button icon-spin" href="https://royhhwang.itch.io/coding-with-corgis/" target="_blank" rel="noopener noreferrer">The Game</a>
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
