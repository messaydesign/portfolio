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
   <div class name="amharic"> <h4> መሣይ ፈለቀ ደንበል</h4></div>
   </div>
   <div className="nameCont"><p> <strong>👋🏽 Hi,</strong> <br/>I am a product designer focused on creating digital experiences who has a passion for motion, 
    visual design, human-centered designer. I really enjoy digging into complex user experience problems with a deliberate curious mindset. 
    All of my work is based on applying the design process to a variety of problems. 
      </p>
    
      </div>
      <div className="social">
     <a href="https://www.instagram.com/messay_d/"><img src={require ('../images/insta.svg')} width="20"/></a>
     <a href="https://dribbble.com/messay_design"><img src={require ('../images/dribbble.svg')} width="20"/></a>
     <a href="https://twitter.com/messay_co"><img src={require ('../images/twitter.svg')} width="20"/></a>
     <a href="/"><img src={require ('../images/medium.svg')} width="20"/></a>
     <a href="www.linkedin.com/in/messayf"><img src={require ('../images/linkedin.svg')} width="20"/></a>
     <a href="https://www.behance.net/messayco"><img src={require ('../images/behance.svg')} width="100"/></a>
     <a href="/"><img src={require ('../images/github.svg')} width="20"/></a>
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
