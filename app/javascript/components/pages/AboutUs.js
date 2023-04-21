import React from 'react'
import { NavLink } from "react-router-dom";


const AboutUs = () => {
  
  // TODO - add pictures and bio info(not all available yet).
  return (
    <>
      <h1>Learn More About The Dev Team!</h1>
        <a href='https://www.linkedin.com/in/brandon-ray95/' target="_blank"> <img className='linkedIn' src='https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='brandons linked in logo'></img></a>
          <div className='squares-container-left-side'>
            <div className='squares'>
              {/* images will go here */}
              <div className='Brandon-about-me'> 
                <p>Hi. I am Brandon. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>    
        </div>
      </div> 

      <div className='squares-container-right-side'>
      <a href='https://www.linkedin.com/in/sdcurry3/' target="_blank"> <img className='linkedIn' src='https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='simons linked in logo'></img></a>
          <div className='squares'>
            {/* images will go here */}
            <div className='Simon-about-me'> 
              <p> Hi. I am Simon. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>    
        </div>
      </div> 

      <div className='squares-container-left-side'>
      <a href='https://www.linkedin.com/in/maurer-joshua/' target="_blank"> <img className='linkedIn' src='https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='joshs linked in logo'></img></a>
        <div className='squares'>
          {/* images will go here */}
          <div className='Josh-about-me'> 
            <p> Hi. I am Josh. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>    
        </div>
      </div> 

      <div className='squares-container-right-side'>
      <a href='https://www.linkedin.com/in/jacob-ross96/' target="_blank"> <img className='linkedIn' src='https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='jacobs linked in logo'></img></a>
          <div className='squares'>
            {/* images will go here */}
            <div className='Jacob-about-me'> 
              <p> Hi. I am Jacob. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>    
        </div>
      </div> 

      <button className='home-page-button'>
        <NavLink to="/">View Home Page</NavLink>
      </button>
    </>
  )
}

export default AboutUs