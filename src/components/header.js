import React from 'react'
import Link from 'gatsby-link'
import { Fade, Flip } from 'react-reveal';
import "../css/header.css";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'transparent',
      marginBottom: '1.45rem',
    }}
  >
    <div className="header-layer">
      <Flip bottom>
        <h1 className="header-block">
          <Link className="header-link"
            to="#contact"
          >
            Contact
        </Link>
          <Link className="header-link"
            to="#about"
          >
            About
        </Link>
          <Link className="header-link"
            to="#projects"
          >
            Projects
        </Link>
        </h1>
      </Flip>
    </div>
  </div >
)

export default Header
