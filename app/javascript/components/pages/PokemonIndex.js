import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
// const PokemonIndex = ({ pokemons, idApi, nameApi, imageApi }) => {
const PokemonIndex = ({ allApiPokemons }) => {

  const navigate = useNavigate()
  
  const { id } = useParams()

  const navigateShow = () => {
    navigate(`/pokemonshow/${id}`)
  }

  return (
    <>
      <div className='unprotected-index-page'>
        <h1 className='index-header'>Pokemon Index</h1>
        <p>Click Image To View Pokemon Stats</p>
        <div className='index-cards'>
        {allApiPokemons?.map((pokemonApi, index) => {
            return(
              <Card
                key={index}
                style={{width: '18rem'}}
                >
                <CardText>
                  No. {pokemonApi.id}
                </CardText>  
                  <img
                  src={pokemonApi.sprites.other.dream_world.front_default}
                  alt={pokemonApi.name}
                  onClick={navigateShow}
                  />
                <CardBody>
                  <CardTitle tag="h5">
                    {pokemonApi.name.toUpperCase()}
                  </CardTitle>
                  <CardText>
                  {pokemonApi.types[0].type.name} type
                  </CardText>
                  <CardText tag="h6">
                    {/* Nickname: {pokemon.pokemon_nickname} */}
                  </CardText>
                </CardBody>
                <Button className='view-button'>
                  <NavLink to={`/pokemonshow/${pokemonApi.id}`}>View</NavLink>
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PokemonIndex