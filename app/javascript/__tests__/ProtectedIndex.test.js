import React from "react";
import ProtectedIndex from "../components/pages/ProtectedIndex";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import mockPokemon from "../components/mockPokemon";


describe("<ProtectedIndex />", () => {

  beforeEach(() => {

  const current_user = {
    email: "test@testing.com",
    password: "testing123",
    id: 1
  }

   render(
     <BrowserRouter>
       <ProtectedIndex pokemons={mockPokemon}  current_user={current_user}/>
     </BrowserRouter>
  )
})
   
    it("displays each pokemons name", () => {
      mockPokemon.forEach(pokemon => {
      const pokemonName = screen.getByText('Name: ' + pokemon.pokemon_name)
      expect(pokemonName).toBeInTheDocument()
    })
  })
});