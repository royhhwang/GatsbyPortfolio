import React from 'react'
import Link from 'gatsby-link'

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
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="#H"
          style={{
            color: 'black',
            float: 'right',
            fontSize: 14 + 'px',
            textDecoration: 'none',
          }}
        >
          About
        </Link>
        <Link
          to="#home"
          style={{
            color: 'black',
            float: 'right',
            marginRight: 2 + 'em',
            fontSize: 14 + 'px',
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
      </h1>
    </div>
  </div >
)

export default Header
