import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from './pages/Home'
import PokemonIndex from "./pages/PokemonIndex"
import ProtectedIndex from "./pages/ProtectedIndex"
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"
import PokemonShowPage from "./pages/PokemonShowPage"
import NewPokemon from './pages/NewPokemon'
import PokemonUpdate from "./pages/PokemonUpdate"


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

  const createPokemons = (pokemon) => {
    fetch("/pokemons", {
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readPokemons())
    .catch((error) => console.log(error))
  }

  const updatePokemon = (pokemon, id) => {
    fetch(`/pokemons/${id}`, {
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => readPokemons(payload))
      .catch((error) => console.log(error));
  };

  const deletePokemon = (id) => {
    fetch(`/pokemons/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => readPokemons())
    .catch((error) => console.log(error));
  }



  const [allApiPokemons,setAllApiPokemons] = useState([]);

  const [loadApiPokemon,setApiLoadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=151');

  const getAllApiPokemons = async () =>{
    const response = await fetch(loadApiPokemon)
    const data = await response.json()
    setApiLoadPokemon(data.next)
  
    const createApiPokemonObject = (result) => {
      result.forEach(async (apiPokemon) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${apiPokemon.name}`)
        const data = await response.json();
        setAllApiPokemons(currentApiPokemon => [...currentApiPokemon, data])
      });
    }
    createApiPokemonObject(data.results)
    await console.log(allApiPokemons)
  }

  useEffect(()=>{
    getAllApiPokemons()
  },[])

  return (
    <>
      <BrowserRouter>
        <Header {...props}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/pokemonindex' element={
            <PokemonIndex 
              pokemons={pokemons} 
              allApiPokemons={allApiPokemons} 

              // idApi={apiPokemon.id}
              // nameApi={apiPokemon.name}
              // imageApi={apiPokemon.sprites.other.dream_world.front_default}
            />} />
          <Route path='/pokemonshow/:id' element={<PokemonShowPage pokemons={pokemons} {...props} deletePokemon={deletePokemon}/> } />
          <Route path="/pokemonupdate/:id" element={<PokemonUpdate pokemons={pokemons} updatePokemon={updatePokemon}/>} />
          <Route path='/pokemonnew' element={<NewPokemon createPokemons={createPokemons} current_user={props.current_user}/>} />
          <Route path='/mycollection' element={<ProtectedIndex pokemons={pokemons} current_user={props.current_user}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App
