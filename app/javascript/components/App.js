import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'

const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> }/>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App;
