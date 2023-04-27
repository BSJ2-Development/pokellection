import React from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const PokemonShowPage = ({ pokemons, deletePokemon }) => {

    const { id } = useParams()

    const selectedPokemon = pokemons?.find((pokemon) => pokemon.id === +id)

    const nav = useNavigate()

    const handleSubmit = () => {
      deletePokemon(selectedPokemon.id)
      nav('/mycollection')
    }

    
  return (
    <>
      {selectedPokemon && (
        <>
        <div className='show-page-background'>
          <h1 className='show-pokemon-header'>{selectedPokemon.pokemon_name}</h1>
          <div className='show-card-container'>
            <Card style={{width: '18rem'}} className='show-page-card'>
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
          </div>       
          <div className='show-page-buttons'>
            <Button className='button'>
              <NavLink to={`/pokemonupdate/${selectedPokemon?.id}`}>Update Pokemon</NavLink>
            </Button>
            <Button className='button' onClick={handleSubmit}>
              <NavLink to="/mycollection">Delete Pokemon</NavLink>
            </Button>
            <Button className='button'>
              <NavLink to='/mycollection'>My Pokemon</NavLink>
            </Button>

            <Button className='button'>
              <NavLink to='/pokemonindex'>Pokedex</NavLink>
            </Button>
          </div> 
           </div>
        </>
      )}
    </>
  )
}

export default PokemonShowPage