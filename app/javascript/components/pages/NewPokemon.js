import React, { useState } from 'react'
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button 
} from 'reactstrap'
import { NavLink, useNavigate } from 'react-router-dom'


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
      <div className='new-pokemon-page'>
        <Form>

        <FormGroup>
            <Label className='label' for="pokedex_entry">
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
            <Label className='label' for="pokemon_name">
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
            <Label className='label' for="pokemon_nickname">
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
            <Label className='label' for="pokemon_type">
              Pokemon Type:
            </Label>
              <Input
                  id='pokemon_type'  
                  name="pokemon_type"
                  placeholder="Add your Pokemon's type here"
                  type="select"
                  onChange={handleChange}
                >
                  <option value="">
                  Add your Pokemon's type here
                  </option>
                  <option value="grass">
                    grass
                  </option>
                  <option value="fire">
                    fire
                  </option>
                  <option value="water">
                    water   
                  </option>
                  <option value="bug">
                    bug   
                  </option>
                  <option value="psychic">
                    psychic   
                  </option>
                  <option value="ghost">
                    ghost   
                  </option>
                  <option value="normal">
                    normal   
                  </option>
                  <option value="poison">
                    poison   
                  </option>
                  <option value="fairy">
                    fairy   
                  </option>
                  <option value="rock">
                    rock   
                  </option>
                  <option value="electric">
                    electric   
                  </option>
                  <option value="ice">
                    ice   
                  </option>
                  <option value="dragon">
                    dragon   
                  </option>
                  <option value="ground">
                    ground   
                  </option>
                  <option value="fighting">
                    fighting   
                  </option>
                  <option value="dark">
                    dark   
                  </option>
                  <option value="steel">
                    steel   
                  </option>
                </Input>
          </FormGroup>

          <FormGroup>
            <Label className='label' for="hp">
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
            <Label className='label' for="height">
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
            <Label className='label' for="weight">
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
            <Label className='label' for="ability">
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
            <Label className='label' for="pokemon_version">
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
            <Label className='label' for="image">
              Image URL
            </Label>
              <Input
                id='image'  
                name="image"
                type="url"
                onChange={handleChange}
              />
          </FormGroup>
          <div className='create-buttons'>
          <Button className='submit-button' onClick={handleSubmit} name="submit">
                Submit
          </Button>
          <Button className='submit-button' >
            <NavLink to='/mycollection'>Cancel</NavLink>
          </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default NewPokemon