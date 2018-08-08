import React, { Component } from 'react'
import Header from './header.js'
import Banner from './banner.js'
import Work from './work.js'
import About from './about.js'
import Contact from './contact.js'
import Transition from './transition.js'

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <Work />
    <About />
    <Contact />
    {/* <Transition /> */}
  </div>
)

export default IndexPage
