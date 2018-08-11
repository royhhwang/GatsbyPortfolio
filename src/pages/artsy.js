import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import Arrow from '../media/arrow.png'
import ArtsyVideo from '../media/artsy.mp4'
import ArtsyIcon from '../media/artsyjpg.jpg'
import '../scss/project.scss'

const Artsy = () => (
  <div>
    <Nav />
    <div className="display-layer">
      <Link className="back-button icon-spin"
        to="/#projects"
      >
        <Fade top>
          <img src={Arrow} alt="back button" />
        </Fade>
      </Link>
      <Fade top>
        <h1 className="display-title">Artsy</h1>
      </Fade>
      <Fade left>
        <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
          <source src={ArtsyVideo} type="video/mp4" />
          Your browser does not support this video!
        </video>
      </Fade>
      <Fade right>
        <div className="half-display text-content">
          <a href="https://artsyapi.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={ArtsyIcon} alt="Artsy Page" className="icon-spin" /><br />Visit the site!</a>
          <hr style={{ margin: 20 + "px" }} />
          <a href="https://github.com/royhhwang/artsyapi" target="_blank" rel="noopener noreferrer">Visit the repo!</a>
          <br />
        </div>
      </Fade>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum eros nunc, sed consequat purus semper sit amet. Quisque pretium erat vel sapien sagittis fringilla. Vestibulum vel erat et justo sollicitudin pharetra. Aliquam consequat tempor quam, ac mollis ex molestie eu. Sed ut tellus in libero consequat laoreet sed sed purus. Sed et vehicula lectus. Aenean posuere fermentum ligula. Sed fringilla nunc eu justo pulvinar tempor. Aliquam erat volutpat. Sed fringilla laoreet felis, a sodales nibh vestibulum vel. In ligula odio, sodales eu suscipit sed, viverra sed nibh. Vivamus mollis aliquet dui, sit amet euismod dolor pulvinar non. Suspendisse sem eros, congue sed felis ac, auctor venenatis neque. Pellentesque et lacinia est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tincidunt libero vel odio fringilla suscipit non ut tortor.</p>
    </div>
  </div >
)

export default Artsy
