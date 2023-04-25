import React from 'react'
import PokemonShowPage from '../components/pages/PokemonShowPage'
import mockPokemon from "../components/mockPokemon";
import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import { UserEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom'

const renderShow = () => {
  render (
    <MemoryRouter initialEntries={["/pokemonshow/1"]}>
      <Routes>
        <Route path='/pokemonshow/:id' element={<PokemonShowPage pokemons={mockPokemon}/> }/>
      </Routes>
    </MemoryRouter>
  )
}

describe("<ShowPokemon />", () => {
  it("renders without crashing", () => {
    renderShow()
  })

  it("renders pokemon card", () => {
    renderShow()
    const pokemon = screen.getByText(`No. ${mockPokemon[0].pokedex_entry}`)
    expect(pokemon).toBeInTheDocument()
  })

  it("renders a button for update", () => {
    renderShow()
    expect(
      screen.getByRole("button", {
        name: /Update Pokemon/i,
      })
    ).toBeInTheDocument;
  });

  it("renders a button for delete", () => {
    renderShow()
    const deleteButton = screen.getByText(/delete/i)
    expect(deleteButton).toBeInTheDocument()
  })
})

export default PokemonShowPage