import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Button } from 'reactstrap'

 
const PokemonIndex = ({ pokemons }) => {

  return (
    <>
      <h1>Pokemon Index</h1>

        <div className='index-cards'>
        {pokemons?.map((pokemon, index) => {

          return (
            <div data-testid="card" >
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
                    <NavLink href="#">
                      View More
                    </NavLink>
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