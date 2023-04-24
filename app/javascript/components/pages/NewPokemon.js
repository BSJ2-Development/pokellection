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
          <Label for="pokemon-name">
            Pokemon Name:
          </Label>
            <Input
              name="pokemon-name"
              placeholder="Add your Pokemon's "
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="age">
            Dinosaur Age:
          </Label>
            <Input
              name="age"
              placeholder="How many millions of years old are you really?"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>
        
        <FormGroup>
          <Label for="diet">
            Dinosaur Diet:
          </Label>
          <Input
            id="diet"
            name="diet"
            placeholder="What do you REALLY like to eat?"
            type="select"
            onChange={handleChange}
          >
            <option value="Carnivore">
              Carnivore
            </option>
            <option value="Herbivore">
              Herbivore
            </option>
            <option value="Omnivore">
              Omnivore   
            </option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="enjoys">
            Dinosaur Enjoys:
          </Label>
            <Input
              name="enjoys"
              placeholder="What do you enjoy doing over the millenia?"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="image">
            Image URL
          </Label>
            <Input
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