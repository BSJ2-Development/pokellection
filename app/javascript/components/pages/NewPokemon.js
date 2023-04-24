import React, { useState } from 'react'
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormFeedback, 
  FormText, 
  Button 
} from 'reactstrap'
import { NavLink, useNavigate } from 'react-router-dom'


const NewPokemon = ({ current_user, createPokemons}) => {

  const nav = useNavigate()
  
  const [myPokemon, setMyPokemon] = useState({
    pokemon_name: '', 
    pokemon_nickname: '', 
    pokemon_type: '', 
    pokedex_entry: '', 
    pokemon_version: '', 
    height: '', 
    weight: '', 
    hp: '', 
    ability: '', 
    image: '',
    user_id: current_user?.id
  })

  const handleChange = (event) => {
    setMyPokemon({ ...myPokemon, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    createPokemons(myPokemon)
    nav('/mypokemon')
  }

  return (
    <>
      <Form>

      <FormGroup>
          <Label for="pokedex-number">
            Pokemon No:
          </Label>
            <Input
              id='pokedex-number'
              name="pokedex-number"
              placeholder="Add your Pokedex number here"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="pokemon-name">
            Pokemon Name:
          </Label>
            <Input
              id='pokemon-name'
              name="pokemon-name"
              placeholder="Add your Pokemon's name here"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="pokemon-nickname">
            Pokemon Nickname:
          </Label>
            <Input
              id='pokemon-nickname'
              name="pokemon-nickname"
              placeholder="Add your Pokemon's nickname here"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="pokemon-hp">
            Pokemon's HP:
          </Label>
            <Input
              id='pokemon-hp'
              name="pokemon-hp"
              placeholder="Add your Pokemon's HP here"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>
        
        <FormGroup>
          <Label for="pokemon-height">
            Pokemon's Height:
          </Label>
            <Input
              id='pokemon-height' 
              name="pokemon-height"
              placeholder="Add your Pokemon's height here"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="pokemon-weight">
            Pokemon's Weight:
          </Label>
            <Input
              id='pokemon-weight' 
              name="pokemon-weight"
              placeholder="Add your Pokemon's weight here"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="pokemon-ability">
            Pokemon Ability:
          </Label>
            <Input
              id='pokemon-ability'
              name="pokemon-ability"
              placeholder="Add your Pokemon's name here"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="image">
            Image URL
          </Label>
            <Input
              id='image'  
              name="image"
              type="url"
              onChange={handleChange}
            />
        </FormGroup>
    
        <Button onClick={handleSubmit} name="submit">
              Submit
        </Button>
      </Form>
    </>
  )
}

export default NewPokemon