import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
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
     <a href="https://www.linkedin.com/in/messayf/"><img src={require ('../images/linkedin.svg')} width="20"/></a>
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
    <div className="sections"> 
 <div className="sectionGrid">
        <div className="section1"> 
           <h1> <div> <img src={require ('../images/user-r.svg')} width="50"/> </div> User research </h1>
          <p>
            Products are used by whole range of people, from different cultures, with physical, and situational
            constraints. User research will enable us to observe users in their natural environment, giving us a
            better understanding of the way users work.
        </p> 
        </div>
        <div className="section1"> 
          
          <h1> <div> <img src={require ('../images/research.svg')} width="50"/> </div> Business research</h1>
          <p>
          Developing a deeper understanding of the business mission, its culture, and operations to get a
        clear understanding of where the company is heading to and what type of product is aspired to
        build.
        </p> 
        </div>

        <div className="section1">
          
          <h1> <div> <img src={require ('../images/design.svg')} width="42"/> </div> Design Decision</h1>
          <p>
          For every design decision creating a quick sketch, flowcharts, prototypes and detailed documentation
        will help to have a clear understanding throughout the team I am working with, this will
        clear the air between Product, Business and Engineering.
        </p> 
        </div>

          <div className="section1">
          
          <h1> <div> <img src={require ('../images/user.svg')} width="50"/> </div> Communication </h1> 
          <p>
          To pitch any design decision from any product team needs a clear pitch deck to get buy from
        stakeholders. In this process having a working prototype really help to avoid communication
        pitfalls and make positive impact.
        </p>

        </div>
</div>
</div>

<div className="main">
  <div className="mainGroup">
   <div className="mainGroupImg">  <button> The Process </button></div>
  <div>
    <h1> Visual Design, Dashboards & User Experianece </h1>
    <p> I worked with numerous clients from all around the world 
      from early startups to well-established companies.<br/> 
      I always seek new opportunities for cooperation on 
      projects around interesting dashboards, design system
    </p>
  </div>

  </div>
</div>

<form action="../pages/success " name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" netlify >
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

  </div>
)

export default IndexPage
