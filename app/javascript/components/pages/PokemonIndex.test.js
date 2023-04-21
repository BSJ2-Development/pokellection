import React from "react";
import PokemonIndex from "./PokemonIndex";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import mockPokemon from "../mockPokemon";

describe("<PokemonIndex />", () => {

     const indexRender = () => {
      render(
        <BrowserRouter>
          <PokemonIndex mockPokemon={mockPokemon}/>
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

  it("displays a list of beers", () => {
    indexRender()
    expect("BULBASAUR").toBeInTheDocument;
    expect("IVYSAUR").toBeInTheDocument;
  });
   
});