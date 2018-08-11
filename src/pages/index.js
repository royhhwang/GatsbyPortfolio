import React, { Component } from 'react'
import Banner from '../components/banner.js'
import Work from '../components/work.js'
import About from '../components/about.js'
import Contact from '../components/contact.js'
import TopButton from '../components/button.js'

const IndexPage = () => (
  <div>
    <Banner />
    <Work />
    <About />
    <Contact />
    <TopButton />
  </div>
)

export default IndexPage
