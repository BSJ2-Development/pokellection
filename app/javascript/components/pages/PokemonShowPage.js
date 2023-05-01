import React from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const PokemonShowPage = ({ deletePokemon, logged_in, pokemons }) => {

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
            <h1 className='show-pokemon-header'>{selectedPokemon.pokemon_name.toUpperCase()}</h1>
            <div className='show-card-container'>
              <Card 
              style={{width: '18rem'}} 
              className={selectedPokemon.pokemon_type}
              >
                <CardTitle>
                  No. {selectedPokemon.pokedex_entry}
                </CardTitle>
                <img
                alt={selectedPokemon.pokemon_name}
                src={selectedPokemon.image}
                />
                <CardBody>
                  <CardTitle>
                    {selectedPokemon.pokemon_type.toUpperCase()} TYPE
                  </CardTitle> 
                  <CardTitle tag="h5">
                  {selectedPokemon.pokemon_name.toUpperCase()}
                  </CardTitle>
                  <br/>
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
                    Ability {selectedPokemon.ability} 
                  </CardText>
                </CardBody>
              </Card>
            </div> 
            {logged_in && (
              <div className='show-page-buttons'>
                <Button className='button'>
                  <NavLink to={`/pokemonupdate/${selectedPokemon?.id}`}>Update Pokemon</NavLink>
                </Button>
                <Button onClick={handleSubmit} className='button'>
                  <NavLink to="/mycollection">Delete Pokemon</NavLink>
                </Button>
                <Button className='button'>
                  <NavLink to='/mycollection'>My Pokemon</NavLink>
                </Button>
              </div> 
            )}      
          </div>
        </>
      )}
    </>
  )
}

export default PokemonShowPage