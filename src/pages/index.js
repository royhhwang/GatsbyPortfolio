import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from './header.js'
import Banner from './banner.js'
import Work from './work.js'
import About from './about.js'
import Contact from './contact.js'
import Transition from './page-2.js'

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <Work />
    <About />
    <Contact />
    <Transition />
  </div>
)

export default IndexPage
