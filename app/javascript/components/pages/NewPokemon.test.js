import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NewPokemon from './NewPokemon'
import '@testing-library/jest-dom'

describe('<NewPokemon />', () => {
  beforeEach(() => {

    const current_user = {
      email: "test@testing.com",
      password: "testing123",
      id: 1
    }
  
     render(
       <BrowserRouter>
         <NewPokemon current_user={current_user} />
       </BrowserRouter>
    )
  })

  it('renders without crashing', () => {})

  it('has a textbox for pokemon name field', () => {
    const nameField = screen.getByRole('textbox', {
      name: /pokemon name:/i
    })
    expect(nameField).toBeInTheDocument()
  })

  it('has placeholder text', () => {
    const placeholder = screen.getByPlaceholderText(/Add your Pokedex number here/i)
    expect(placeholder).toBeInTheDocument()
  })

  it("renders a button to submit updated", () => {
    expect(
      screen.getByRole("button", {
        name: /Submit/i,
      })
    ).toBeInTheDocument;
  });
})