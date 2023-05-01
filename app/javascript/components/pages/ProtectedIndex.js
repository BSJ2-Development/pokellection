import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

const ProtectedIndex = ({ pokemons, current_user }) => {
  const myPokemon = pokemons?.filter(
    (pokemon) => current_user?.id === pokemon.user_id
  )
  
  return (
    <>
      <div className='protected-index-page'>
        <h1 className='index-header'>My Pokemon</h1>
          <button className='add-new-card'>
            <NavLink to='/pokemonnew'>Add a New Card</NavLink>
          </button>
        <div className='protected-index-cards'>
          {myPokemon?.map((pokemon, index) => {
            return(
              <Card
                className={pokemon.pokemon_type}
                key={index}
                style={{width: '18rem'}}
                >
                <CardText>
                  No. {pokemon.pokedex_entry}
                </CardText>
                <img
                alt={pokemon.pokemon_name}
                src={pokemon.image}
                />
                <CardBody>
                  <CardText>
                    {pokemon.pokemon_type.toUpperCase()} TYPE
                  </CardText>
                  <CardTitle tag="h5">
                    {pokemon.pokemon_name.toUpperCase()}
                  </CardTitle>
                  <CardText tag="h6">
                    Nickname: {pokemon.pokemon_nickname}
                  </CardText>
                </CardBody>
                <CardBody>
                    <NavLink className='view-button' to={`/pokemonshow/${pokemon.id}`}>View</NavLink>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProtectedIndex