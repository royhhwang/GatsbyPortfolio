import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import Arrow from '../media/arrow.png'
import UsagiVideo from '../media/usagiwarrior.mp4'
import UsagiIcon from '../media/bunnyonly.png'
import '../scss/project.scss'

const Usagi = () => (
  <div className="project-main">
    <Nav />
    <div className="display-layer wrapper">
      <Link className="icon-spin"
        to="/#projects"
      >
        <span className="dark-green-button">Back</span>
      </Link>
      <Fade>
        <h1 className="display-title"><span>Usagi Warrior</span></h1>
        <div className="video-container wrapper">
          <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
            <source src={UsagiVideo} type="video/mp4" />
            Your browser does not support this video!
      </video>
        </div>
      </Fade>
      <div className="project-content">
        <Fade left>
          <div className="project-description">
            <h2 className="heading">Frustrating Platformer</h2>
            <p className="tech"><strong>Unity 3D | 3ds Max</strong></p>
            <p className="blurb">Difficult yet intuitive, Usagi Warrior's gameplay provides extreme highs and lows.</p>
            <div className="task-content" style={{ lineHeight: 1.6 + 'em' }}>
              <br />
              <ul className="project-text">
                <li>Project Manager: Handled development timelines and delegation.</li>
                <li>Game Programmer: Responsible for enemy modeling and behaviors, transitioning, and managing gameplay states.</li>
                <li>Visual Editior: Visual Editor: Creation of simple terrain and sky boxes.</li>
                <li>Level Designer: Aimed for simple, yet precise platforming to encourage sharp judgement and skills.</li>
              </ul>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="half-display text-content">
            <img src={UsagiIcon} alt="coding with corgis page" className="round" />
            <br />
            <a className="dark-green-button icon-spin" href="https://royhhwang.itch.io/usagi-warrior/" target="_blank" rel="noopener noreferrer">The Game</a>
            <br />
            <a className="dark-green-button icon-spin" href="https://github.com/royhhwang/Project3-RPG/" target="_blank" rel="noopener noreferrer">The Repo</a>
            <br />
          </div>
        </Fade>
      </div>
    </div>
  </div >
)

export default Usagi
