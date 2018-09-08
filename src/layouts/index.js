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
    visual design, human-centered design. I really enjoy digging into complex user experience problems with a deliberate curious mindset. 
    All of my work is based on applying the design process to a variety of problems. 
    <div className="amharic"> <h4> መሣይ ፈለቀ ደንበል ::</h4></div>
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
    <div className="section">
    <div className="sectionGroup">
    <h1>
  Let’s Build <br/> Something great together 👍🏽
  </h1>
  <p>
  It is all about solving problems, if not it would be pixel art. Product design always starts with understanding the problem rigorously.The fun part being a product designer is that I have problems to solve every single day with collaborative problem-solving process. In my 7+ years journey I realize that close collaboration of multidisciplinary team with a design process creates a winning product. 
Each individual from different disciplinary provides a unique and valuable perspective about the problem, as product enhances and feature updates have a huge impact across internal and external products.   In my product design process, I’ll be focusing on four areas I believe will facilitate my ability to make meaningful contributions to the team I am working with.
</p>

    
    
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
