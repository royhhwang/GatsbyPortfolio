import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Header from '../components/header.js'
import Arrow from '../media/arrow.png'
import UsagiVideo from '../media/usagiwarrior.mp4'
import UsagiIcon from '../media/bunnyonly.png'
import '../css/project.css'

const Usagi = () => (
  <div>
    <Header />
    <div className="display-layer">
      <Link className="back-button icon-spin"
        to="/#projects"
      >
        <Fade top>
          <img src={Arrow} alt="back button" />
        </Fade>
      </Link>
      <Fade top>
        <h1 className="display-title">Usagi Warrior</h1>
      </Fade>
      <Fade left>
        <video className="half-display" controls="true" playsInline muted autoPlay loop>
          <source src={UsagiVideo} type="video/mp4" />
          Your browser does not support this video!
        </video>
      </Fade>
      <Fade right>
        <div className="half-display text-content">
          <a href="https://royhhwang.itch.io/usagi-warrior/" target="_blank" rel="noopener noreferrer"><img src={UsagiIcon} alt="usagi Page" className="icon-spin round" /><br />Visit the site!</a>
          <hr style={{ margin: 20 + "px" }} />
          <a href="https://github.com/royhhwang/Project3-RPG/" target="_blank" rel="noopener noreferrer">Visit the repo!</a>
          <br />
        </div>
      </Fade>
    </div>
  </div >
)

export default Usagi