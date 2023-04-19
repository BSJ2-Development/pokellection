user1 = User.where(email: 'test@testing.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')
user2 = User.where(email: 'testing@testing.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')

user1_pokemon = [
  {
    pokemon_name: 'BULBASAUR', 
    pokemon_nickname: 'Bongo', 
    pokemon_type: 'Grass', 
    pokedex_entry: 1, 
    pokemon_version: 'Blue', 
    height: 70.1, 
    weight: 6.8, 
    hp: 48, 
    ability: 'Vine Whip', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
  },
  {
    pokemon_name: 'IVYSAUR', 
    pokemon_nickname: 'Green Ivy', 
    pokemon_type: 'Grass', 
    pokedex_entry: 2, 
    pokemon_version: 'Blue', 
    height: 100.1, 
    weight: 13.4, 
    hp: 63, 
    ability: 'Razor Leaf', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
  },
  {
    pokemon_name: 'VENUSAUR', 
    pokemon_nickname: 'Stinky', 
    pokemon_type: 'Grass', 
    pokedex_entry: 3, 
    pokemon_version: 'Blue', 
    height: 205.1, 
    weight: 100.2, 
    hp: 84, 
    ability: 'Poison Powder', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg',
  },
  {
    pokemon_name: 'CHARMANDER', 
    pokemon_nickname: 'Chupu', 
    pokemon_type: 'Fire', 
    pokedex_entry: 4, 
    pokemon_version: 'Red', 
    height: 61.0, 
    weight: 8.6, 
    hp: 41, 
    ability: 'Scratch', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
  },
  {
    pokemon_name: 'CHARMELEON', 
    pokemon_nickname: 'Chupo', 
    pokemon_type: 'Fire', 
    pokedex_entry: 5, 
    pokemon_version: 'Red', 
    height: 110.1, 
    weight: 19.0, 
    hp: 58, 
    ability: 'Flare', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg',
  },
  {
    pokemon_name: 'CHARIZARD', 
    pokemon_nickname: 'Chupi', 
    pokemon_type: 'Fire', 
    pokedex_entry: 6, 
    pokemon_version: 'Red', 
    height: 170.0, 
    weight: 90.5, 
    hp: 78, 
    ability: 'Blast Burn', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
  },
  {
    pokemon_name: 'SQUIRTLE', 
    pokemon_nickname: 'Yurtle', 
    pokemon_type: 'Water', 
    pokedex_entry: 7, 
    pokemon_version: 'Yellow', 
    height: 50.1, 
    weight: 9.2, 
    hp: 44, 
    ability: 'Shell Attack', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
  },
  {
    pokemon_name: 'WARTORTLE', 
    pokemon_nickname: 'Yurtle Yurt', 
    pokemon_type: 'Water', 
    pokedex_entry: 8, 
    pokemon_version: 'Yellow', 
    height: 100.0, 
    weight: 22.6, 
    hp: 59, 
    ability: 'Water Blast', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg',
  },
  {
    pokemon_name: 'BLASTOISE', 
    pokemon_nickname: 'Yurtle Yurtle', 
    pokemon_type: 'Water', 
    pokedex_entry: 9, 
    pokemon_version: 'Yellow', 
    height: 161.0, 
    weight: 85.9, 
    hp: 81, 
    ability: 'Hydro Tackle', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg',
  },
  {
    pokemon_name: 'PIKACHU', 
    pokemon_nickname: 'Pika', 
    pokemon_type: 'Electric', 
    pokedex_entry: 25, 
    pokemon_version: 'Yellow', 
    height: 40.1, 
    weight: 6.0, 
    hp: 38, 
    ability: 'Thunder Shock', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
  }
]

user2_pokemon = [
  {
    pokemon_name: 'BULBASAUR', 
    pokemon_nickname: 'Ben', 
    pokemon_type: 'Grass', 
    pokedex_entry: 1, 
    pokemon_version: 'Blue', 
    height: 70.1, 
    weight: 6.8, 
    hp: 48, 
    ability: 'Vine Whip', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
  },
  {
    pokemon_name: 'IVYSAUR', 
    pokemon_nickname: 'Benji', 
    pokemon_type: 'Grass', 
    pokedex_entry: 2, 
    pokemon_version: 'Blue', 
    height: 100.1, 
    weight: 13.4, 
    hp: 63, 
    ability: 'Razor Leaf', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
  },
  {
    pokemon_name: 'VENUSAUR', 
    pokemon_nickname: 'Benjamin', 
    pokemon_type: 'Grass', 
    pokedex_entry: 3, 
    pokemon_version: 'Blue', 
    height: 205.1, 
    weight: 100.2, 
    hp: 84, 
    ability: 'Poison Powder', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg',
  },
  {
    pokemon_name: 'CHARMANDER', 
    pokemon_nickname: 'Taco Bell', 
    pokemon_type: 'Fire', 
    pokedex_entry: 4, 
    pokemon_version: 'Red', 
    height: 61.0, 
    weight: 8.6, 
    hp: 41, 
    ability: 'Scratch', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
  },
  {
    pokemon_name: 'CHARMELEON', 
    pokemon_nickname: 'Bubbly Tummy', 
    pokemon_type: 'Fire', 
    pokedex_entry: 5, 
    pokemon_version: 'Red', 
    height: 110.1, 
    weight: 19.0, 
    hp: 58, 
    ability: 'Flare', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg',
  },
  {
    pokemon_name: 'CHARIZARD', 
    pokemon_nickname: 'Poor Life Choice', 
    pokemon_type: 'Fire', 
    pokedex_entry: 6, 
    pokemon_version: 'Red', 
    height: 170.0, 
    weight: 90.5, 
    hp: 78, 
    ability: 'Blast Burn', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
  },
  {
    pokemon_name: 'SQUIRTLE', 
    pokemon_nickname: 'Cleetus', 
    pokemon_type: 'Water', 
    pokedex_entry: 7, 
    pokemon_version: 'Yellow', 
    height: 50.1, 
    weight: 9.2, 
    hp: 44, 
    ability: 'Shell Attack', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
  },
  {
    pokemon_name: 'WARTORTLE', 
    pokemon_nickname: 'Fox Robot', 
    pokemon_type: 'Water', 
    pokedex_entry: 8, 
    pokemon_version: 'Yellow', 
    height: 100.0, 
    weight: 22.6, 
    hp: 59, 
    ability: 'Water Blast', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg',
  },
  {
    pokemon_name: 'BLASTOISE', 
    pokemon_nickname: 'Illustrious', 
    pokemon_type: 'Water', 
    pokedex_entry: 9, 
    pokemon_version: 'Yellow', 
    height: 161.0, 
    weight: 85.9, 
    hp: 81, 
    ability: 'Hydro Tackle', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg',
  },
  {
    pokemon_name: 'PIKACHU', 
    pokemon_nickname: 'Pika Pika', 
    pokemon_type: 'Electric', 
    pokedex_entry: 25, 
    pokemon_version: 'Yellow', 
    height: 40.1, 
    weight: 6.0, 
    hp: 38, 
    ability: 'Thunder Shock', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
  }
]

user1_pokemon.each do |pokemon|
  user1.pokemon.create(pokemon)
  p "created: #{pokemon}"
end

