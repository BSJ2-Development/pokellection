import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const PokemonShowPage = ({ pokemons }) => {

    const { id } = useParams()
    const selectedPokemon = pokemons?.find((pokemon) => pokemon.id === +id)

    
  return (
    <>
      {selectedPokemon && (
        <>
          <h1 className='show-pokemon-header'>{selectedPokemon.pokemon_name}</h1>
          <Card style={{width: '18rem'}}>
            <img
            alt={selectedPokemon.pokemon_name}
            src={selectedPokemon.image}
            />
            <CardBody>
              <CardText>
                No. {selectedPokemon.pokedex_entry}
              </CardText>
              <CardTitle tag="h4">
                Name: {selectedPokemon.pokemon_name}
              </CardTitle>
              <CardText>
                {selectedPokemon.pokemon_type} type
              </CardText>
              <CardText tag="h5">
                Nickname: {selectedPokemon.pokemon_nickname}
              </CardText>
              <CardText tag="h5">
                HP: {selectedPokemon.hp}
              </CardText>
              <CardText tag="h5">
                Height: {selectedPokemon.height} cm
              </CardText>
              <CardText tag="h5">
                Weight: {selectedPokemon.weight} kg
              </CardText>
              <CardText tag="h5">
                Ability: {selectedPokemon.ability} 
              </CardText>
              <CardText tag="h5">
                Version: {selectedPokemon.pokemon_version}
              </CardText>
            </CardBody>
          </Card>
          
          <Button>
            <NavLink to="#">Edit Pokemon</NavLink>
          </Button>
          <Button>
            <NavLink to="#">Delete Pokemon</NavLink>
          </Button>
          <Button>
            <NavLink to='/mycollection'>My Pokemon</NavLink>
          </Button>

          <Button>
            <NavLink to='/pokemonindex'>Pokedex</NavLink>
          </Button>
        </>
      )}
    </>
  )
}

export default PokemonShowPage