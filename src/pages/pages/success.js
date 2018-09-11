import React from 'react'
import Link from 'gatsby-link'
import './success.css'

const success = () => (
  <div>
    <div className="success">
    <div className="successGroup">
    <div className="back">
    <h1> 
    <img src={require ('../pages/img/suc.svg')} width="100"/> <br/><br/>  
      I recived your message and <br/>I will be contacting you shortly to follow-up.<br/><br/>
    </h1>
     <div className="backButton">  <Link to="/"> <img src={require ('../pages/img/back.svg')} width="50"/></Link>  </div>
     </div>
    
    </div>
  
    </div>


  </div>
)

export default success
