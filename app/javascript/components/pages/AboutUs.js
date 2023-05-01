import React from 'react'
import { NavLink } from "react-router-dom";
import Brandon from "../assets/Brandon.jpg"
import Simon from "../assets/Simon.jpg"
import Jacob from "../assets/Jacob.jpg"
import Josh from "../assets/Josh.jpg"
import Joshesfav from "../assets/Joshesfav.png"
import Simonsfav from "../assets/Simonsfav"
import Brandonsfav from "../assets/Brandonsfav"
import Jacobsfav from "../assets/Jacobsfav.png"
import github from "../assets/github.png"
import linkedin2 from "../assets/linkedin2.png"
const AboutUs = () => {
  
  // TODO - add pictures and bio info(not all available yet).
  return (
    <>
    <div className='aboutus-page-background'>
      <h1 className='about-us-header' >Learn More About The Dev Team!</h1>
      <div className='about-us-container'>


      <div className='dev-container'>
        <div className='about-me-image-container'> </div>
        <div className='about-me-text'>
        <img className='brandon-self-image' src={Brandon} alt='Brandon'/>
          <p className='brandon-about-me-text'>Hi. I am Brandon.</p>
          <p className='bio-section' > I'm the Tech Lead for Pokellection. I am 27 years old and I enjoy my free time at the lake in my kayaks or playing video games. My favorite pokemon has and always will be Eevee.</p> 
          <p>Favorite pokemon: Eevee</p>
          <img className='fav_pokemon' src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png'/>
          <div className='links-to-social'>
          <a href='https://www.linkedin.com/in/brandon-ray95/' target="_blank"> <img className='linked-in-right' src={linkedin2} alt='jacobs linked in logo'></img></a>        
          <a href='https://github.com/BxRay95' target="_blank"> <img className='linked-in-right' src={github} alt='jacobs linked in logo'></img></a>
          </div>
        </div>
      </div>

      <br/>

      <div className='dev-container'>
        <div className='-me-image-container'> </div>
        <div className='about-me-text'>
        <img className='brandon-self-image' src={Simon} alt='Simon'/>
          <p className='simon-about-me-text'> Hi. I am Simon.</p>
          <p className='bio-section'> I'm the Project Manager for Pokellection. My favorite Pokemon is Ditto because it's the most versatile, they like people, and it's probably super fun to squish.</p>
          <p>Favorite pokemon: Ditto.</p>
          <img className='fav_pokemon' src={Simonsfav}/>
          <div className='links-to-social'>
          <a href='https://www.linkedin.com/in/sdcurry3/' target="_blank"> 
          <img className='linked-in-right' src={linkedin2} alt='jacobs linked in logo'></img></a>
          <a href='https://github.com/SDCurry3' target="_blank"> 
          <img className='linked-in-right' src={github} alt='jacobs linked in logo'></img></a>
          </div>
        </div>
      </div>
      
      <br/>

      <div className='dev-container-josh'>
        <div className='about-me-image-container'>   </div>
        <div className='about-me-text'>
        <img className='brandon-self-image' src={Josh} alt='Josh'/>
          <p className='josh-about-me-text'> Hi. I am Josh. </p>
          <p className='bio-section'> I'm the Product owner for Pokellection. A passionate software developer with a love for travel and exploring the world, sitting down with a good book and cup of coffee, and catching 'em all in the world of Pokémon. Having just finished the bootcamp at LEARN Academy, Josh is constantly honing his coding skills and staying up to date on the latest trends in the tech world. But when he's not glued to his computer screen, you can find him immersed  in new cultures while traveling or getting lost in a page-turning novel. And of course, there is always time for a quick Pokémon battle or two. </p>
            <p>Favorite Pokemon: Cubone</p>
            <img className='fav_pokemon' src={Joshesfav}/>
            <div className='links-to-social'>
            <a href='https://www.linkedin.com/in/maurer-joshua/' target="_blank"> 
            <img className='linked-in-right' src={linkedin2} alt='jacobs linked in logo'></img></a>
              <a href='https://github.com/JoshuaMaurer' target="_blank"> 
              <img className='linked-in-right' src={github} alt='jacobs linked in logo'></img></a>
              </div>
        </div>
      </div>
  
      <br/>

      <div className='dev-container'>
        <div className='about-me-image-container'>
        </div>
        <div className='about-me-text'>
          <img className='brandon-self-image' src={Jacob} alt='Jacob'/>
            <p className='brandon-about-me-text'> Hi. I am Jacob.</p>
            <p className='bio-section' >I'm the Design Lead for Pokellection. I am an experienced Developer with skills in HTML, CSS, Javascript, Node, React, Express.js, APIs, and Git/Github. I am certified in technical support, computer networking, and AWS Cloud technologies. Previously I worked as an Information Management Officer and Help Desk Technician at MSM Technology, LLC  </p> 
            <p>Favorite Pokemon:Ninetales</p>  
          <img className='fav_pokemon' src={Jacobsfav}/>
          <div className='links-to-social'>
          <a href='https://www.linkedin.com/in/jacob-ross96/' target="_blank"> 
          <img className='linked-in-right' src={linkedin2} alt='jacobs linked in logo'></img></a>
          <a href='https://github.com/JacobR96' target="_blank"> <img className='linked-in-right' src={github} alt='jacobs linked in logo'></img></a>
          </div>
        </div>
      </div>
      

      
        </div>
        </div>
    </>
  )
}

export default AboutUs