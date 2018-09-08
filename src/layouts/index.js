import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <div className="hero">
    <div className="heroGroup">
   <div className="name"> <h1> <img src={require ('../images/Logo.svg')}/>  Messay F. Denbel</h1>
   </div>
   <div className="nameCont"><p> <strong>👋🏽 Hi,</strong> <br/>I am a product designer focused on creating digital experiences who has a passion for motion, 
    visual design, human-centered designer. I really enjoy digging into complex user experience problems with a deliberate curious mindset. 
    All of my work is based on applying the design process to a variety of problems. 
      </p>
      </div>
</div>
    </div>
  </div>
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
