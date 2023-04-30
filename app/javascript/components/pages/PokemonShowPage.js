import React from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const PokemonShowPage = ({ deletePokemon, logged_in, allApiPokemons }) => {

    const { id } = useParams()

    const selectedPokemon = allApiPokemons?.find((apiPokemon) => apiPokemon.id === +id)

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
            <h1 className='show-pokemon-header'>{selectedPokemon.name.toUpperCase()}</h1>
            <div className='show-card-container'>
              <Card 
              style={{width: '18rem'}} 
              className='show-page-card'
              >
                <CardTitle>
                  No. {selectedPokemon.id}
                </CardTitle>
                <img
                alt={selectedPokemon.name}
                src={selectedPokemon.sprites.other.dream_world.front_default}
                />
                <CardBody>
                  <CardTitle>
                    {selectedPokemon.types[0].type.name.toUpperCase()} TYPE
                  </CardTitle> 
                  <CardTitle tag="h5">
                  {selectedPokemon.name.toUpperCase()}
                  </CardTitle>
                  <br/>
                  <CardText tag="h5">
                    HP: {selectedPokemon.stats[0].base_stat}
                  </CardText>
                  <CardText tag="h5">
                    Height: {selectedPokemon.height} cm
                  </CardText>
                  <CardText tag="h5">
                    Weight: {selectedPokemon.weight} kg
                  </CardText>
                  <CardText tag="h5">
                    Special AP: {selectedPokemon.stats[3].base_stat} 
                  </CardText>
                  {/* <CardText tag="h5">
                    Version: {selectedPokemon.pokemon_version}
                  </CardText> */}
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