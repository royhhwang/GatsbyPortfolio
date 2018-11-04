import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import MobileVideo from '../media/artsymobile.mp4'
import ArtsyVid from '../media/artsy.mp4'
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
        <div className="mobile-container wrapper">
          <video className="half-display video-mobile" controls="true" playsInline muted autoPlay loop>
            <source src={MobileVideo} type="video/mp4" />
            Your browser does not support this video!
            </video>
          <video className="half-display video-content artsy-sp" controls="true" playsInline muted autoPlay loop>
            <source src={ArtsyVid} type="video/mp4" />
            Your browser does not support this video!
            </video>
        </div>
      </Fade>
      <div className="project-content">
        <Fade left>
          <div className="project-description">
            <h2 className="heading">Artist and Artwork Gallery</h2>
            <p className="tech"><strong>React | Artsy API | Bootstrap | Sass</strong></p>
            <p className="blurb">Concept webpage for an art gallery site. Taps into the Artsy API to display images of historic artwork.</p>
            <div className="task-content" style={{ lineHeight: 1.6 + 'em' }}>
              <br />
              <ul className="project-text">
                <li>Modular and sleek; designed for mobile first.</li>
                <li>Scan and shop through a large compilation of artwork.</li>
                <li>Built with React and Bootstrap.</li>
              </ul>
            </div>
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
