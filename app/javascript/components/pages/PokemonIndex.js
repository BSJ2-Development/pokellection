import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import SearchBar from '../components/SearchBar'

const PokemonIndex = ({ allApiPokemons }) => {
  
  const { id } = useParams()


  return (
    <>
      <div className='unprotected-index-page'>
        <div className="App">
          <SearchBar placeholder="Enter a Pokemon Name..." data={allApiPokemons} />
        </div>
        <h1 className='index-header'>Pokemon Index</h1>
        <div className='index-cards'>
          {/* <SearchBar /> */}
        {allApiPokemons?.sort((a, b) => a.id - b.id).map((pokemonApi, index) => {
            return(
              <Card
                className={pokemonApi.types[0].type.name}
                key={index}
                style={{width: '18rem'}}
                >
                <CardText>
                  No. {pokemonApi.id}
                </CardText>  
                  <img
                  src={pokemonApi.sprites.other.dream_world.front_default}
                  alt={pokemonApi.name}
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
                  <NavLink className={pokemonApi.types[0].type.name} to={`/unprotectedshow/${pokemonApi.id}`}>View</NavLink>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PokemonIndex