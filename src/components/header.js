import React from 'react'
import Link from 'gatsby-link'
import { Flip } from 'react-reveal';
import "../scss/header.scss";

const Header = () => (
    <div className="nav-layer">
        {/* <Flip bottom> */}
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
        {/* </Flip> */}
    </div>
)

export default Header
