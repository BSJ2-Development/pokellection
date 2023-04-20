require 'rails_helper'

RSpec.describe "Pokemons", type: :request do
  let (:user) {User.create email: 'test@testing.com', password: 'testing123', password_confirmation: 'testing123'}
  describe "GET /index" do
    it "gets a list of pokemon" do
      user.pokemon.create(
        pokemon_name: 'BULBASAUR', 
        pokemon_nickname: 'Bongo', 
        pokemon_type: 'Grass', 
        pokedex_entry: 1, 
        pokemon_version: 'Blue', 
        height: 70.1, 
        weight: 6.8, 
        hp: 48, 
        ability: 'Vine Whip', 
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      )
    
    get '/pokemons'
    pokemon = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(pokemon.length).to eq 1
    end
  end
end
