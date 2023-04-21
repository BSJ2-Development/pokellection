import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from './pages/Home'
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"

const App = (props) => {
  return (
    <>
      <BrowserRouter>
      <Header {...props}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          
        </Routes>
        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App
