import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="hero">

      <div className="heroGroup">

        <div className="name"> <h1> <img src={require('../images/Logo.svg')} />  Messay F. Denbel</h1>
        </div>
        <div className="nameCont"><p> <strong>👋🏽 Hi,</strong> <br />I am a product designer focused on creating digital experiences who has a passion for motion,
         visual design, human-centered design. I really enjoy digging into complex user experience problems with a deliberate curious mindset.
         All of my work is based on applying the design process to a variety of problems.
    <div className="amharic"> <h4> መሣይ ፈለቀ ደንበል ::</h4></div>
        </p>

        </div>
        <div className="social">
          <a href="https://www.instagram.com/messay_d/"><img src={require('../images/insta.svg')} width="20" /></a>
          <a href="https://dribbble.com/messay_design"><img src={require('../images/dribbble.svg')} width="20" /></a>
          <a href="https://twitter.com/messay_co"><img src={require('../images/twitter.svg')} width="20" /></a>
          <a href="/"><img src={require('../images/medium.svg')} width="20" /></a>
          <a href="https://www.linkedin.com/in/messayf/"><img src={require('../images/linkedin.svg')} width="20" /></a>
          <a href="https://www.behance.net/messayco"><img src={require('../images/behance.svg')} width="100" /></a>
          <a href="/"><img src={require('../images/github.svg')} width="20" /></a>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="sectionGroup">
        <h1>
          Let’s Build <br /> Something great together 👍🏽
  </h1>
        <p>
          In many of my clients asking me <strong>“what is your design process?”</strong> and <strong> “What are the best tools and techniques when coming to Product Design?”. </strong> The reason they ask this question is not that they don't know about the product design (UX) process, but most of them having this problem “How can we align a Design (UX) process in our product development cycle?”. Which are most of the product designers encounter when working with different development teams. Some companies have their process, but most of the time those type of organizations have “Engineer based” process to work. This type of process ordinary contains a resistance when a product team is newly established inside the organization due to a process which will be created by the team to develop solutions for specific user needs.
          Due to the gap between designers and developers creates issues when meeting deadlines and in communication as well. <br/> In my own experience most of the clients I have worked with, they don't have a clear idea about which step to start their process. I tried to come up with a design process which I can attach to any project, but honestly, I failed. ThenI have learned that I can take a Design process any employer have and add the parts I need in the process accordingly and create a new custom tailored process. As a showcase, I picked this process depends on the development environment and project scope.  I want to present to you my method and how I did it
        </p>  
      </div>
    </div>
    <div className="sections">
      <div className="sectionGrid">
        <div className="section1">
          <h1> <div> <img src={require('../images/user-r.svg')} width="50" /> </div> User research </h1>
          <p>
            Products are used by whole range of people, from different cultures, with physical, and situational
            constraints. User research will enable us to observe users in their natural environment, giving us a
            better understanding of the way users work.
        </p>
        </div>
        <div className="section1">

          <h1> <div> <img src={require('../images/research.svg')} width="50" /> </div> Business research</h1>
          <p>
            Developing a deeper understanding of the business mission, its culture, and operations to get a
          clear understanding of where the company is heading to and what type of product is aspired to
          build.
        </p>
        </div>

        <div className="section1">

          <h1> <div> <img src={require('../images/design.svg')} width="42" /> </div> Design Decision</h1>
          <p>
            For every design decision creating a quick sketch, flowcharts, prototypes and detailed documentation
          will help to have a clear understanding throughout the team I am working with, this will
          clear the air between Product, Business and Engineering.
        </p>
        </div>

        <div className="section1">

          <h1> <div> <img src={require('../images/user.svg')} width="50" /> </div> Communication </h1>
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
      from early startups to well-established companies.<br />
            I always seek new opportunities for cooperation on
            projects around interesting dashboards, design system
    </p>
        </div>

      </div>
    </div>
    <div ClassName="contactWrrap">
      <div className="contact">
        <div className="contactLeft">
          <div className="social">
            <a href="https://www.instagram.com/messay_d/"><img src={require('../images/insta.svg')} width="20" /></a>
            <a href="https://dribbble.com/messay_design"><img src={require('../images/dribbble.svg')} width="20" /></a>
            <a href="https://twitter.com/messay_co"><img src={require('../images/twitter.svg')} width="20" /></a>
            <a href="/"><img src={require('../images/medium.svg')} width="20" /></a>
            <a href="https://www.linkedin.com/in/messayf/"><img src={require('../images/linkedin.svg')} width="20" /></a>
            <a href="https://www.behance.net/messayco"><img src={require('../images/behance.svg')} width="100" /></a>
            <a href="/"><img src={require('../images/github.svg')} width="20" /></a>
          </div>
        </div>
        <div className="contactName">
          <h1> Lets Talk </h1>
          <form action="/success " name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" netlify >
            <p>
              <label>Your Name <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email  <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Message <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
