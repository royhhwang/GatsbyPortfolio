import React from 'react'
import Link from 'gatsby-link'
import { Fade, Flip } from 'react-reveal';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'transparent',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1500,
        padding: '1.45rem 1.5rem',
      }}
    >
      <Flip bottom>
        <h1 style={{ margin: 0 }}>
          <Link
            to="#contact"
            style={{
              color: 'black',
              float: 'right',
              fontSize: 14 + 'px',
              textDecoration: 'none',
            }}
          >
            Contact
        </Link>
          <Link
            to="#about"
            style={{
              color: 'black',
              float: 'right',
              marginRight: 2 + 'em',
              fontSize: 14 + 'px',
              textDecoration: 'none',
            }}
          >
            About
        </Link>
          <Link
            to="#projects"
            style={{
              color: 'black',
              float: 'right',
              marginRight: 2 + 'em',
              fontSize: 14 + 'px',
              textDecoration: 'none',
            }}
          >
            Projects
        </Link>
        </h1>
      </Flip>
    </div>
  </div >
)

export default Header
