import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../media/header.jpg'
import '../scss/index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Roy Hwang\'s Portfolio - Welcome!' },
        { name: 'keywords', content: 'Portfolio V2' },
        { name: 'og:image', content: Header },
      ]}>
      <meta property="og:image" content={Header} />
    </Helmet>

    {children()}

  </div >
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
      site {
    siteMetadata {
      title
    }
    }
  }
`
