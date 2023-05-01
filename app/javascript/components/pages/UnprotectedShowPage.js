import React from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const PokemonShowPage = ({ allApiPokemons }) => {

    const { id } = useParams()

    const selectedPokemon = allApiPokemons?.find((apiPokemon) => apiPokemon.id === +id)

    const nav = useNavigate()

  return (
    <>
      {selectedPokemon && (
        <>
          <div className='show-page-background'>
            <h1 className='show-pokemon-header'>{selectedPokemon.name.toUpperCase()}</h1>
            <div className='show-card-container'>
              <Card 
              style={{width: '18rem'}} 
              className={selectedPokemon.types[0].type.name}
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
                </CardBody>
              </Card>
            </div> 
              <div className='show-page-buttons'>
                <Button className='button'>
                  <NavLink to='/pokemonindex'>Pokemon Index</NavLink>
                </Button>
              </div>      
          </div>
        </>
      )}
    </>
  )
}

export default PokemonShowPage