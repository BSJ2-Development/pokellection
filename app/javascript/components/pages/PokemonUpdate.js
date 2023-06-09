import React, { useState, useEffect } from "react"
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import { useNavigate, NavLink, useParams } from "react-router-dom"

const PokemonUpdate = ({ pokemons, current_user, updatePokemon }) => {
  
  const navigate = useNavigate()

  const [editPokemon, setEditPokemon] = useState()
  
  const { id } = useParams()
  
  useEffect(() => {
    if (pokemons.length > 0) {
      const currentPokemon = pokemons?.find(
        (pokemon) => pokemon.id === +id
      )

      setEditPokemon({
        pokemon_name: currentPokemon.pokemon_name,
        pokemon_nickname: currentPokemon.pokemon_nickname,
        pokemon_type: currentPokemon.pokemon_type,
        pokedex_entry: currentPokemon.pokedex_entry,
        pokemon_version: currentPokemon.pokemon_version,
        height: currentPokemon.height,
        weight: currentPokemon.weight,
        hp: currentPokemon.hp,
        ability: currentPokemon.ability,
        image: currentPokemon.image,
        user_id: current_user?.id
      })
    }
  }, [pokemons])

  const handleChange = (event) => {
    setEditPokemon({ ...editPokemon, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    updatePokemon(editPokemon, id)
    navigate(`/pokemonshow/${id}`)
  }
  if (editPokemon) {
    return (
      <>
        <div className="update-page-container">
          <Form className="form">
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
                value={editPokemon.pokedex_entry}
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
                  value={editPokemon.pokemon_name}
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
                  value={editPokemon.pokemon_nickname}
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
                  type="select"
                  onChange={handleChange}
                  value={editPokemon.pokemon_type}
                >
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
              <Label for="hp">
                Pokemon's HP:
              </Label>
                <Input
                  id='hp'
                  name="hp"
                  placeholder="Add your Pokemon's HP here"
                  type="number"
                  onChange={handleChange}
                  value={editPokemon.hp}
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
                  value={editPokemon.height}
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
                  value={editPokemon.weight}
                />
            </FormGroup>

            <FormGroup>
              <Label for="ability">
                Pokemon Ability:
              </Label>
                <Input
                  id='ability'
                  name="ability"
                  placeholder="Add your Pokemon's ability here"
                  type="text"
                  onChange={handleChange}
                  value={editPokemon.ability}
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
                  value={editPokemon.pokemon_version}
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
                  value={editPokemon.image}
                />
            </FormGroup>
              <div className='create-buttons'>
              <Button className="submit-button" onClick={handleSubmit} name="submit">
                Submit
              </Button>
              <Button className='submit-button' >
                <NavLink to={`/pokemonshow/${id}`}>Cancel</NavLink>
              </Button>
            </div>
          </Form>
        </div>
      </>
    )
  } 
}
export default PokemonUpdate
