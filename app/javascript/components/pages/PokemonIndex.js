import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import SearchBar from '../components/SearchBar'
import mockPokemon from '../mockPokemon'
// const PokemonIndex = ({ pokemons, idApi, nameApi, imageApi }) => {
const PokemonIndex = ({ allApiPokemons, placeholder }) => {

  const navigate = useNavigate()
  
  const { id } = useParams()

  const navigateShow = () => {
    navigate(`/pokemonshow/${id}`)
  }
  return (
    <>
    
    
    
      <div className='unprotected-index-page'>
        <div className="App">
          <SearchBar placeholder="Enter a Pokemon Name..." data={allApiPokemons} />
        </div>
        <h1 className='index-header'>Pokemon Index</h1>
        <div className='index-cards'>
          {/* <SearchBar /> */}
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
                  <CardText>
                  {pokemonApi.types[0].type.name.toUpperCase()} TYPE
                  </CardText>
                  <CardTitle tag="h5">
                    {pokemonApi.name.toUpperCase()}
                  </CardTitle>
                  <CardText tag="h6">
                  </CardText>
                  </CardBody>
                    <NavLink className='view-button' to={`/pokemonshow/${pokemonApi.id}`}>View</NavLink>
                </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PokemonIndex