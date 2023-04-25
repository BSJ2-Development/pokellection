import React, { useState } from 'react'
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button 
} from 'reactstrap'
import { useNavigate } from 'react-router-dom'


const NewPokemon = ({ current_user, createPokemons}) => {

  const nav = useNavigate()
  
  const [myPokemon, setMyPokemon] = useState({
    pokemon_name: "", 
    pokemon_nickname: "", 
    pokemon_type: "", 
    pokedex_entry: "", 
    pokemon_version: "", 
    height: "", 
    weight: "", 
    hp: "", 
    ability: "", 
    image: "",
    user_id: current_user?.id
  })

  const handleChange = (event) => {
    setMyPokemon({ ...myPokemon, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    createPokemons(myPokemon)
    nav('/mycollection')
  }

  return (
    <>
      <Form>

      <FormGroup>
          <Label for="pokedex_entry">
            Pokemon No:
          </Label>
            <Input
              id='pokedex_entry'
              name="pokedex_entry"
              placeholder="Add your Pokedex number here"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="pokemon_name">
            Pokemon Name:
          </Label>
            <Input
              id='pokemon_name'
              name="pokemon_name"
              placeholder="Add your Pokemon's name here"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="pokemon_nickname">
            Pokemon Nickname:
          </Label>
            <Input
              id='pokemon_nickname'
              name="pokemon_nickname"
              placeholder="Add your Pokemon's nickname here"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="pokemon_type">
            Pokemon Type:
          </Label>
            <Input
              id='pokemon_type'  
              name="pokemon_type"
              placeholder="Add your Pokemon's type here"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="hp">
            Pokemon's HP:
          </Label>
            <Input
              id='hp'
              name="hp"
              placeholder="Add your Pokemon's HP here"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>
        
        <FormGroup>
          <Label for="height">
            Pokemon's Height:
          </Label>
            <Input
              id='height' 
              name="height"
              placeholder="Add your Pokemon's height here"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="weight">
            Pokemon's Weight:
          </Label>
            <Input
              id='weight' 
              name="weight"
              placeholder="Add your Pokemon's weight here"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="ability">
            Pokemon Ability:
          </Label>
            <Input
              id='ability'
              name="ability"
              placeholder="Add your Pokemon's name here"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="pokemon_version">
            Pokemon's version:
          </Label>
            <Input
              id='pokemon_version'
              name="pokemon_version"
              placeholder="Add your Pokemon's version here"
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