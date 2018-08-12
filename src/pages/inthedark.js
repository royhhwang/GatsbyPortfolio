import React from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import Nav from '../components/nav.js'
import Arrow from '../media/arrow.png'
import DarkVideo from '../media/spooky.mp4'
import DarkIcon from '../media/ring.jpg'
import '../scss/project.scss'

const Dark = () => (
  <div className="project-main">
    <Nav />
    <div className="display-layer wrapper">
      <Link className="icon-spin"
        to="/#projects"
      >
        <span className="dark-green-button">Back</span>
      </Link>
      <Fade bottom>
        <h1 className="display-title"><span>In the Dark</span></h1>
        <div className="video-container wrapper">
          <video className="half-display video-content" controls="true" playsInline muted autoPlay loop>
            <source src={DarkVideo} type="video/mp4" />
            Your browser does not support this video!
          </video>
        </div>
      </Fade>
      <div className="project-content">
        <Fade left>
          <div className="project-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum eros nunc, sed consequat purus semper sit amet. Quisque pretium erat vel sapien sagittis fringilla. Vestibulum vel erat et justo sollicitudin pharetra. <strong>Aliquam consequat</strong> tempor quam, ac mollis ex molestie eu. Sed ut tellus in libero consequat laoreet sed sed purus. Sed et vehicula lectus. Aenean posuere fermentum ligula. Sed fringilla nunc eu justo pulvinar tempor. Aliquam erat volutpat. Sed fringilla laoreet felis, a sodales nibh vestibulum vel. In ligula odio, sodales eu suscipit sed, viverra sed nibh. Vivamus mollis aliquet dui, sit amet euismod dolor pulvinar non. Suspendisse sem eros, congue sed felis ac, auctor venenatis neque. Pellentesque et lacinia est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tincidunt libero vel odio fringilla suscipit non ut tortor.</p>
          </div>
        </Fade>
        <Fade right>
          <div className="half-display text-content">
            <img src={DarkIcon} alt="In the Dark Page" className="round" />
            <br />
            <a className="dark-green-button icon-spin" href="https://royhhwang.github.io/inthedark/?" target="_blank" rel="noopener noreferrer">The Site</a>
            <br />
            <a className="dark-green-button icon-spin" href="https://github.com/royhhwang/inthedark/" target="_blank" rel="noopener noreferrer">The Repo</a>
            <br />
          </div>
        </Fade>
      </div>
    </div>
  </div >
)

export default Dark
