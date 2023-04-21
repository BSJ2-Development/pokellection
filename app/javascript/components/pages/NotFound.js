import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <h1>404 Page Not Found</h1>
   <img src='https://i.pinimg.com/originals/95/b8/b9/95b8b93ce84677cbdf5a6b1f1a3c5ba0.jpg' alt='not found image'/>
   <button className='home-page-button'>
      <NavLink to="/">View Home Page</NavLink>
    </button>

  </>
  )
}

export default NotFound