import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const ProtectedIndex = ({ pokemons, current_user }) => {
  const myPokemon = pokemons?.filter(
    (pokemon) => current_user?.id === pokemon.user_id
  )
  return (
    <>
    <h1 className='index-header'>My Pokemon</h1>
      <button className='add-new-card'>
        <NavLink to='/pokemonnew'>Add a New Card</NavLink>
      </button>
    <div className='index-cards'>
      {myPokemon?.map((pokemon, index) => {
        return(
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
                <NavLink to={`/pokemonshow/${pokemon.id}`}>View More</NavLink>
              </Button>
            </CardBody>
          </Card>
        )
      })}
    </div>
    </>
  )
}

export default ProtectedIndex