import React from 'react'
import Link from 'gatsby-link'
import "../scss/nav.scss";

const Nav = () => (
    <nav className="nav-block">
        <Link className="nav-link"
            to="/#contact"
        >
            Contact
        </Link>
        <Link className="nav-link"
            to="/#about"
        >
            About
        </Link>
        <Link className="nav-link"
            to="/#projects"
        >
            Projects
        </Link>
        <Link className="nav-link"
            to="/"
        >
            Home
        </Link>
    </nav>
)

export default Nav
