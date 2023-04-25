import React from "react";
import PokemonIndex from "../components/pages/PokemonIndex";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import mockPokemon from "../components/mockPokemon";

describe("<PokemonIndex />", () => {

     const indexRender = () => {
      render(
        <BrowserRouter>
          <PokemonIndex pokemons={mockPokemon}/>
        </BrowserRouter>
      )
    }

    it("renders the page without crashing", () => {});
  
    it("renders the labels on the card", () => {
      indexRender()
      expect("No.:").toBeInTheDocument;
      expect("Name:").toBeInTheDocument;
      expect("Nickname:").toBeInTheDocument;
      
    });
  
    it("displays a list of pokemon", () => {
      indexRender()
      expect("BULBASAUR").toBeInTheDocument;
      expect("IVYSAUR").toBeInTheDocument;
    });
    
    it("displays each pokemons name", () => {
      indexRender()
      mockPokemon.forEach(pokemon => {
      const pokemonName = screen.getByText('Name: ' + pokemon.pokemon_name)
      expect(pokemonName).toBeInTheDocument()
    })
  })
});