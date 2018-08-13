import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import ArtsyVideo from '../media/artsy.mp4'
import ArtsyIcon from '../media/artsyjpg.jpg'
import '../scss/project.scss'

const Artsy = () => (
  <div className="project-main">
    <Nav />
    <div className="display-layer wrapper">
      <Link className="icon-spin"
        to="/#projects"
      >
        <span className="dark-green-button">Back</span>
      </Link>
      <Fade>
        <h1 className="display-title"><span>Artsy</span></h1>
        <div className="video-container wrapper">
          <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
            <source src={ArtsyVideo} type="video/mp4" />
            Your browser does not support this video!
          </video>
        </div>
      </Fade>
      <div className="project-content">
        <Fade left>
          <div className="project-description">
            <span style={{ fontSize: 22 + 'px' }}>Artist and Artwork Gallery</span>
            <br />
            <strong><span style={{ fontSize: 20 + 'px' }}>React.js | Artsy | Bootstrap</span></strong>
            <br />
            ArtsyAPI is a straightforward, sleek webpage for easy content display and categorization.
            <p style={{ lineHeight: 1.6 + 'em' }}>
              <br />
              <ul className="project-text">
                <li>Modular and quick; designed for mobile first.</li>
                <li>Scan and shop through a large compilation of artwork.</li>
                <li>Built through React.js and Bootstrap.</li>
              </ul>
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="half-display text-content">
            <img src={ArtsyIcon} alt="Artsy Page" />
            <br />
            <a className="dark-green-button icon-spin" href="https://artsyapi.herokuapp.com/" target="_blank" rel="noopener noreferrer">The Site</a>
            <br />
            <a className="dark-green-button icon-spin" href="https://github.com/royhhwang/artsyapi" target="_blank" rel="noopener noreferrer">The Repo</a>
            <br />
          </div>
        </Fade>
      </div>
    </div>
  </div >
)

export default Artsy
