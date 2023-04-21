import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className='not-found-container'> 
    <h1 className='not-found-header'>404 Page Not Found</h1>
    <img className='not-found-image' src='https://i.pinimg.com/originals/95/b8/b9/95b8b93ce84677cbdf5a6b1f1a3c5ba0.jpg' alt='not found image'/>
    </div>
    <div className='home-page-div'>
    <button className='home-page-button'>      
      <NavLink className='home-page-button-text' to="/">Return to Home Page</NavLink>
    </button>
    </div>
  </>
  )
}

export default NotFound