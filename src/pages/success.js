import React from 'react'
import Link from 'gatsby-link'
import './success.css'

const success = () => (
  <div>
    <div className="success">
    <div className="successGroup">
    <div className="back">
    <h1> 
    <img src={require ('../images/suc.svg')} width="100"/> <br/><br/>  
      I recived your message and <br/>I will be contacting you shortly to follow-up.<br/><br/>
    </h1>
     <div className="backButton">  <Link to="/"> <img src={require ('../images/back.svg')} width="50"/></Link>  
     
     <div className="social">
     <a href="https://www.instagram.com/messay_d/"><img src={require ('../images/insta.svg')} width="20"/></a>
     <a href="https://dribbble.com/messay_design"><img src={require ('../images/dribbble.svg')} width="20"/></a>
     <a href="https://twitter.com/messay_co"><img src={require ('../images/twitter.svg')} width="20"/></a>
     <a href="/"><img src={require ('../images/medium.svg')} width="20"/></a>
     <a href="https://www.linkedin.com/in/messayf/"><img src={require ('../images/linkedin.svg')} width="20"/></a>
     <a href="https://www.behance.net/messayco"><img src={require ('../images/behance.svg')} width="100"/></a>
     <a href="/"><img src={require ('../images/github.svg')} width="20"/></a>
     </div>
     </div>
     </div>
     
    </div>
  
    </div>


  </div>
)

export default success
