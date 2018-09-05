import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import MobileVideo from '../media/mobileartsy.mp4'
import ArtsyGif from '../media/artsy3.gif'
import ArtsyPic from '../media/artsypic.png'
import ArtsyPic2 from '../media/artsypic2.png'
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
          <div className="mobile-prime">
            <video className="half-display" controls="true" playsInline muted autoPlay loop>
              <source src={MobileVideo} type="video/mp4" />
              Your browser does not support this video!
            </video>
          </div>
          <div className="mobile-content">
            <img src={ArtsyGif} alt="artsy api gif" className="half-display mobile-gif" />
            <img src={ArtsyPic} alt="artsy api gif" />
            <img src={ArtsyPic2} alt="artsy api gif" />
          </div>
        </div>
      </Fade>
      <div className="project-content">
        <Fade left>
          <div className="project-description">
            <h2 className="heading">Artist and Artwork Gallery</h2>
            <p className="tech"><strong>React.js | Artsy | Bootstrap</strong></p>
            <p className="blurb">ArtsyAPI is a straightforward, sleek webpage for easy content display and categorization.</p>
            <div className="task-content" style={{ lineHeight: 1.6 + 'em' }}>
              <br />
              <ul className="project-text">
                <li>Modular and quick; designed for mobile first.</li>
                <li>Scan and shop through a large compilation of artwork.</li>
                <li>Built through React.js and Bootstrap.</li>
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
