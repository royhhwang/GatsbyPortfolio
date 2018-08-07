import React, { Component } from 'react'
import Link from 'gatsby-link'
import Banner from './banner.js'
import Work from './work.js'
import About from './about.js'
import Contact from './contact.js'
import Header from './header.js'

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <Work />
    <About />
    <Contact />
  </div>
)

export default IndexPage
