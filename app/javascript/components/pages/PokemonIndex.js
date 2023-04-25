import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

 
const PokemonIndex = ({ pokemons }) => {

  return (
    <>
      <h1 className='index-header'>Pokemon Index</h1>

        <div className='index-cards'>
        {pokemons?.map((pokemon, index) => {

          return (
            <div>
              <Card
                key={index}
                style={{width: '18rem'}}>
                <img
                alt={pokemon.pokemon_name}
                src={pokemon.image}
                />
                <CardBody>
                  <CardText>
                    No. {pokemon.pokedex_entry}
                  </CardText>
                  <CardTitle tag="h4">
                    Name: {pokemon.pokemon_name}
                  </CardTitle>
                  <CardText>
                    {pokemon.pokemon_type} type
                  </CardText>
                  <CardText tag="h5">
                    Nickname: {pokemon.pokemon_nickname}
                  </CardText>
                </CardBody>
                <CardBody>
                  <Button>
                    <NavLink to={`/pokemonshow/:id`}>View More</NavLink>
                  </Button>
                </CardBody>
              </Card>
            </div>
          )
        })}
      </div>
    </>
  )
}

  

export default PokemonIndex