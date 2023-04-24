import React from 'react'
import ShowPokemon from './showPokemon'
import mockPokemon from "../mockPokemon";
import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import { UserEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom'

const renderShow = () => {
  render (
    <MemoryRouter initialEntries={["/pokemonshow/1"]}>
      <Routes>
        <Route path='/pokemonshow/:id' element={<ShowPokemon pokemons={mockPokemon}/> }/>
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
})

export default ShowPokemon