import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import RaceVideo from '../media/racevelocity.mp4'
import RaceIcon from '../media/taiyaki.png'
import '../scss/project.scss'

const Race = () => (
  <div className="project-main">
    <Nav />
    <div className="display-layer wrapper">
      <Link className="icon-spin"
        to="/#projects"
      >
        <span className="dark-green-button">Back</span>
      </Link>
      <Fade>
        <h1 className="display-title"><span>Race Painting</span></h1>
        <div className="video-container wrapper">
          <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
            <source src={RaceVideo} type="video/mp4" />
            Your browser does not support this video!
        </video>
        </div>
      </Fade>
      <div className="project-content">
        <Fade left>
          <div className="project-description">
            <h2 className="heading">Collaborative Racer</h2>
            <p className="tech"><strong>Phaser.io | Socket.io</strong></p>
            <p className="blurb">Race Painting is as simple as its name. Grab a friend and paint away!</p>
            <div className="task-content" style={{ lineHeight: 1.6 + 'em' }}>
              <br />
              <ul className="project-text">
                <li>Game Programmer: Responsible for canvassing and car physics rendering. Also handled paint trails and Socket.io location updates.</li>
                <li>Smooth gameplay with reactive community map.</li>
                <li>Socket.io in conjunction with Phaser.io allows for multiplayer functionality.</li>
                <li>MySQL database handles local saves for maps and player position.</li>
              </ul>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="half-display text-content">
            <img src={RaceIcon} alt="coding with corgis page" className="round" />
            <br />
            <a className="dark-green-button icon-spin" href="https://race-painting.herokuapp.com/" target="_blank" rel="noopener noreferrer">The Game</a>
            <br />
            <a className="dark-green-button icon-spin" href="https://github.com/Ta1yak1/Race-Paint" target="_blank" rel="noopener noreferrer">The Repo</a>
            <br />
          </div>
        </Fade>
      </div>
    </div>
  </div >
)

export default Race
