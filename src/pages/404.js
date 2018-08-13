import React from 'react'
import Link from 'gatsby-link'
import '../scss/404.scss'

const NotFoundPage = () => (
  <div className="error-layer">
    <div className="error-center">
      <h1>How'd you get here?</h1>
      <p>You just hit a route that doesn&#39;t exist!</p>
      <Link className="error-link"
        to="/"
      >
        Back to home
    </Link>
    </div>
  </div>
)

export default NotFoundPage
