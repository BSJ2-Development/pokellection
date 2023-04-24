import React from 'react'
import { NavLink } from "react-router-dom";
import Brandon from "../assets/Brandon.jpg"
import Simon from "../assets/Simon.jpg"
import Jacob from "../assets/Jacob.jpg"


const AboutUs = () => {
  
  // TODO - add pictures and bio info(not all available yet).
  return (
    <>
      <h1 className='about-us-header' >Learn More About The Dev Team!</h1>
      <div className='about-us-container'>

        <section className='about-me-image-container'>
          <div className='squares-container-left-side'>
            <img className='brandon-self-image' src={Brandon} alt='Brandon'/>
              <a href='https://www.linkedin.com/in/brandon-ray95/' target="_blank"> <img className='linked-in-left' src='https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='brandons linked in logo'></img></a>
              <div className='squares'>
                <div className='Brandon-about-me'> 
                  <p className='brandon-about-me-text'>Hi. I am Brandon.</p>
              </div>    
            </div>
          </div> 
        </section>

        <section className='about-me-image-container'>
          <div className='squares-container-right-side'>
          <img className='simon-self-image' src={Simon} alt='Simon'/>
            <a href='https://www.linkedin.com/in/sdcurry3/' target="_blank"> <img className='linked-in-right' src='https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='simons linked in logo'></img></a>
              <div className='squares'>
                <div className='Simon-about-me'> 
                  <p> Hi. I am Simon.</p>
              </div>    
            </div>
          </div> 
        </section>

        <section className='about-me-image-container'>
          <div className='squares-container-left-side'>
          <img className='josh-self-image' src={Jacob} alt='josh'/>
            <a href='https://www.linkedin.com/in/maurer-joshua/' target="_blank"> <img className='linked-in-left' src='https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='joshs linked in logo'></img></a>
              <div className='squares'>
                <div className='Josh-about-me'> 
                  <p> Hi. I am Josh.</p>
              </div>    
            </div>
          </div> 
        </section>

        <section className='about-me-image-container'>
          <div className='squares-container-right-side'>
            <img className='jacob-self-image' src={Jacob} alt='Jacob'/>
              <a href='https://www.linkedin.com/in/jacob-ross96/' target="_blank"> <img className='linked-in-right' src='https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='jacobs linked in logo'></img></a>
                <div className='squares'>
                  <div className='Jacob-about-me'> 
                    <p> Hi. I am Jacob.</p>
                </div>    
            </div>
          </div> 
        </section>  
        </div>
      <button className='home-page-button'>
        <NavLink to="/">View Home Page</NavLink>
      </button>
    </>
  )
}

export default AboutUs