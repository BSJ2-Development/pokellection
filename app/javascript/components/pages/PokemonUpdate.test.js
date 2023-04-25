import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";
import PokemonUpdate from './PokemonUpdate'
import mockPokemon from "../mockPokemon";

describe("<PokemonUpdate />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/pokemonupdate/1"]}>
        <Routes>
          <Route path="/pokemonupdate/:id" element={<PokemonUpdate pokemons={mockPokemon} />} />
        </Routes>
      </MemoryRouter>
    );
  });


  it("renders the page without crashing", () => {});

  it('has placeholder text', () => {
    const placeholder = screen.getByPlaceholderText(/Add your Pokedex number here/i)
    expect(placeholder).toBeInTheDocument()
  })
  it('has a textbox for pokemon name field', () => {
    const nameField = screen.getByRole('textbox', {
      name: /pokemon name:/i
    })
    expect(nameField).toBeInTheDocument()
  })
  it("renders a button to submit updated data", () => {
    expect(
      screen.getByRole("button", {
        name: /Submit Update/i,
      })
    ).toBeInTheDocument;
  });
});