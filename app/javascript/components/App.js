import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from './pages/Home'
import PokemonIndex from "./pages/PokemonIndex"
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"

const App = (props) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    readPokemons();
  }, []);

  const readPokemons = () => {
    fetch('/pokemons')
      .then((response) => response.json())
      .then((payload) => setPokemons(payload))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <BrowserRouter>
        <Header {...props}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/pokemonindex' element={<PokemonIndex pokemons={pokemons}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App
