require 'rails_helper'

RSpec.describe Pokemon, type: :model do
  let (:user) {User.create email: 'test@testing.com', password: 'testing123', password_confirmation: 'testing123'} 

  it "should validate that all attributes are present" do
    pokemon = user.pokemon.create(
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
    
    expect(pokemon.errors).to be_empty
    expect(pokemon.errors).to_not include "can't be blank"
  end

  it "should validate pokemon_name" do
    pokemon = user.pokemon.create(
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
    
    expect(pokemon.errors[:pokemon_name]).to_not be_empty
  end

  it "should validate pokemon_nickname" do
    pokemon = user.pokemon.create(
      pokemon_name: 'BULBASAUR', 
      pokemon_type: 'Grass', 
      pokedex_entry: 1, 
      pokemon_version: 'Blue', 
      height: 70.1, 
      weight: 6.8, 
      hp: 48, 
      ability: 'Vine Whip', 
      image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    )
    
    expect(pokemon.errors[:pokemon_nickname]).to_not be_empty
  end

  it "should validate pokemon_type" do
    pokemon = user.pokemon.create(
      pokemon_name: 'BULBASAUR', 
      pokemon_nickname: 'Bongo', 
      pokedex_entry: 1, 
      pokemon_version: 'Blue', 
      height: 70.1, 
      weight: 6.8, 
      hp: 48, 
      ability: 'Vine Whip', 
      image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    )
    
   expect(pokemon.errors[:pokemon_type]).to_not be_empty
  end

  it "should validate pokemon_entry" do
    pokemon = user.pokemon.create(
      pokemon_name: 'BULBASAUR', 
      pokemon_nickname: 'Bongo', 
      pokemon_type: 'Grass', 
      pokemon_version: 'Blue', 
      height: 70.1, 
      weight: 6.8, 
      hp: 48, 
      ability: 'Vine Whip', 
      image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    )
   
    expect(pokemon.errors[:pokedex_entry]).to_not be_empty
  end

  it "should validate pokemon_version" do
    pokemon = user.pokemon.create(
      pokemon_name: 'BULBASAUR', 
      pokemon_type: 'Grass', 
      pokedex_entry: 1, 
      height: 70.1, 
      weight: 6.8, 
      hp: 48, 
      ability: 'Vine Whip', 
      image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    )
    
    expect(pokemon.errors[:pokemon_version]).to_not be_empty
  end

  it "should validate height" do
    pokemon = user.pokemon.create(
      pokemon_name: 'BULBASAUR', 
      pokemon_nickname: 'Bongo', 
      pokemon_type: 'Grass', 
      pokedex_entry: 1, 
      pokemon_version: 'Blue', 
      weight: 6.8, 
      hp: 48, 
      ability: 'Vine Whip', 
      image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    )
        
    expect(pokemon.errors[:height]).to_not be_empty
  end

  it "should validate weight" do
    pokemon = user.pokemon.create(
      pokemon_name: 'BULBASAUR', 
      pokemon_nickname: 'Bongo', 
      pokemon_type: 'Grass', 
      pokedex_entry: 1, 
      pokemon_version: 'Blue', 
      height: 70.1, 
      hp: 48, 
      ability: 'Vine Whip', 
      image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    )
      
    expect(pokemon.errors[:weight]).to_not be_empty
  end

  it "should validate hp" do
    pokemon = user.pokemon.create(
      pokemon_name: 'BULBASAUR', 
      pokemon_nickname: 'Bongo', 
      pokemon_type: 'Grass', 
      pokedex_entry: 1, 
      pokemon_version: 'Blue', 
      height: 70.1, 
      weight: 6.8, 
      ability: 'Vine Whip', 
      image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    )
      
    expect(pokemon.errors[:hp]).to_not be_empty
  end 
 
  it "should validate pokemon_nickname" do
    pokemon = user.pokemon.create(
      pokemon_name: 'BULBASAUR', 
      pokemon_nickname: 'Bongo', 
      pokemon_type: 'Grass', 
      pokedex_entry: 1, 
      pokemon_version: 'Blue', 
      height: 70.1, 
      weight: 6.8, 
      hp: 48, 
      image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    )
      
    expect(pokemon.errors[:ability]).to_not be_empty
  end

  it "should validate image" do
    pokemon = user.pokemon.create(
      pokemon_name: 'BULBASAUR', 
      pokemon_nickname: 'Bongo', 
      pokemon_type: 'Grass', 
      pokedex_entry: 1, 
      pokemon_version: 'Blue', 
      height: 70.1, 
      weight: 6.8, 
      hp: 48, 
      ability: 'Vine Whip',
    )
      
    expect(pokemon.errors[:image]).to_not be_empty
  end

  it "should validate no duplicate pokemon nick names" do
    pokemon1 = user.pokemon.create(
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
    pokemon = user.pokemon.create(
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
     
    expect(pokemon.errors[:pokemon_nickname]).to_not be_empty
  end
end
