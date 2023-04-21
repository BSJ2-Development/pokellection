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

  describe "POST /create" do
    it "creates a pokemon" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Test', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      expect(response).to have_http_status(200)
      pokemon = Pokemon.last
      expect(pokemon.pokemon_name).to eq "Test"
      expect(pokemon.pokemon_nickname).to eq "test nickname"
      expect(pokemon.pokemon_type).to eq "poison"
      expect(pokemon.pokedex_entry).to eq 4
      expect(pokemon.pokemon_version).to eq "green"
      expect(pokemon.height).to eq 45
      expect(pokemon.weight).to eq 5.7
      expect(pokemon.hp).to eq 60
      expect(pokemon.ability).to eq "scratch"
      expect(pokemon.image).to eq "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      expect(pokemon.user_id).to eq user.id
    end
  end

  it 'Does not create a pokemon without a pokemon name' do
    pokemon_params = {
      pokemon: {
        pokemon_nickname: 'test nickname', 
        pokemon_type: 'poison', 
        pokedex_entry: 4, 
        pokemon_version: 'green', 
        height: 45, 
        weight: 5.7, 
        hp: 60, 
        ability: 'scratch', 
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        user_id: user.id
      }
    }
      post "/pokemons", params: pokemon_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['pokemon_name']).to include "can't be blank"
  end 

  it 'Does not create a pokemon without a pokemon nickname' do
    pokemon_params = {
      pokemon: {
        pokemon_name: 'Test',
        pokemon_type: 'poison', 
        pokedex_entry: 4, 
        pokemon_version: 'green', 
        height: 45, 
        weight: 5.7, 
        hp: 60, 
        ability: 'scratch', 
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        user_id: user.id
      }
    }
      post "/pokemons", params: pokemon_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['pokemon_nickname']).to include "can't be blank"
  end

  it 'Does not create a pokemon without a pokemon type' do
    pokemon_params = {
      pokemon: {
        pokemon_name: 'Test',
        pokemon_nickname: 'test nickname',  
        pokedex_entry: 4, 
        pokemon_version: 'green', 
        height: 45, 
        weight: 5.7, 
        hp: 60, 
        ability: 'scratch', 
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        user_id: user.id
      }
    }
      post "/pokemons", params: pokemon_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['pokemon_type']).to include "can't be blank"
  end

  it 'Does not create a pokemon without a pokedex entry' do
    pokemon_params = {
      pokemon: {
        pokemon_name: 'Test',
        pokemon_nickname: 'test nickname', 
        pokemon_type: 'poison', 
        pokemon_version: 'green', 
        height: 45, 
        weight: 5.7, 
        hp: 60, 
        ability: 'scratch', 
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        user_id: user.id
      }
    }
      post "/pokemons", params: pokemon_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['pokedex_entry']).to include "can't be blank"
  end

  it 'Does not create a pokemon without a pokemon version' do
    pokemon_params = {
      pokemon: {
        pokemon_name: 'BULBASAUR', 
        pokemon_nickname: 'Bongo', 
        pokemon_type: 'Grass', 
        pokedex_entry: 1, 
        height: 70.1, 
        weight: 6.8, 
        hp: 48, 
        ability: 'Vine Whip', 
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        user_id: user.id
      }
    }
      post "/pokemons", params: pokemon_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['pokemon_version']).to include "can't be blank"
  end
  
  it 'Does not create a pokemon without a height' do
    pokemon_params = {
      pokemon: {
        pokemon_name: 'BULBASAUR', 
        pokemon_nickname: 'Bongo', 
        pokemon_type: 'Grass', 
        pokedex_entry: 1, 
        pokemon_version: 'Blue', 
        weight: 6.8, 
        hp: 48, 
        ability: 'Vine Whip', 
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        user_id: user.id
      }
    }
      post "/pokemons", params: pokemon_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['height']).to include "can't be blank"
  end

  it 'Does not create a pokemon without a weight' do
    pokemon_params = {
      pokemon: {
        pokemon_name: 'BULBASAUR', 
        pokemon_nickname: 'Bongo', 
        pokemon_type: 'Grass', 
        pokedex_entry: 1, 
        pokemon_version: 'Blue', 
        height: 70.1, 
        hp: 48, 
        ability: 'Vine Whip', 
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        user_id: user.id
      }
    }
      post "/pokemons", params: pokemon_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['weight']).to include "can't be blank"
  end

  it 'Does not create a pokemon without hp' do
    pokemon_params = {
      pokemon: {
        pokemon_name: 'BULBASAUR', 
        pokemon_nickname: 'Bongo', 
        pokemon_type: 'Grass', 
        pokedex_entry: 1, 
        pokemon_version: 'Blue', 
        height: 70.1, 
        weight: 6.8, 
        ability: 'Vine Whip', 
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        user_id: user.id
      }
    }
      post "/pokemons", params: pokemon_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['hp']).to include "can't be blank"
  end

  it 'Does not create a pokemon without an ability' do
    pokemon_params = {
      pokemon: {
        pokemon_name: 'BULBASAUR', 
        pokemon_nickname: 'Bongo', 
        pokemon_type: 'Grass', 
        pokedex_entry: 1, 
        pokemon_version: 'Blue', 
        height: 70.1, 
        weight: 6.8, 
        hp: 48, 
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        user_id: user.id
      }
    }
      post "/pokemons", params: pokemon_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['ability']).to include "can't be blank"
  end

  it 'Does not create a pokemon without an image' do
    pokemon_params = {
      pokemon: {
        pokemon_name: 'BULBASAUR', 
        pokemon_nickname: 'Bongo', 
        pokemon_type: 'Grass', 
        pokedex_entry: 1, 
        pokemon_version: 'Blue', 
        height: 70.1, 
        weight: 6.8, 
        hp: 48, 
        ability: 'Vine Whip', 
        user_id: user.id
      }
    }
      post "/pokemons", params: pokemon_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['image']).to include "can't be blank"
  end

  it 'Does not create a pokemon without a user id' do
    pokemon_params = {
      pokemon: {
        pokemon_name: 'BULBASAUR', 
        pokemon_nickname: 'Bongo', 
        pokemon_type: 'Grass', 
        pokedex_entry: 1, 
        pokemon_version: 'Blue', 
        height: 70.1, 
        weight: 6.8, 
        hp: 48, 
        ability: 'Vine Whip', 
        image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
      }
    }
      post "/pokemons", params: pokemon_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['user_id']).to include "can't be blank"
  end

  describe "PATCH /update" do
    it "updates a pokemon" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Test', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: 'Test', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params

      updated_pokemon = Pokemon.find(pokemon.id)

      expect(response).to have_http_status(200)
      expect(pokemon.pokemon_name).to eq "Test"
      expect(pokemon.pokemon_nickname).to eq "test nickname"
      expect(pokemon.pokemon_type).to eq "poison"
      expect(pokemon.pokedex_entry).to eq 4
      expect(pokemon.pokemon_version).to eq "green"
      expect(pokemon.height).to eq 45
      expect(pokemon.weight).to eq 5.7
      expect(pokemon.hp).to eq 60
      expect(pokemon.ability).to eq "scratch"
      expect(pokemon.image).to eq "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      expect(pokemon.user_id).to eq user.id
    end

    it "doesn't update without a pokemon name" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: '', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }
      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params
      updated_pokemon = Pokemon.find(pokemon.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['pokemon_name']).to include "can't be blank"
    end

    it "doesn't update without a pokemon nickname" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: '', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }
      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params
      updated_pokemon = Pokemon.find(pokemon.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['pokemon_nickname']).to include "can't be blank"
    end

    it "doesn't update without a pokemon type" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: '', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }
      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params
      updated_pokemon = Pokemon.find(pokemon.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['pokemon_type']).to include "can't be blank"
    end

    it "doesn't update without a pokedex entry" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'Pika', 
          pokemon_type: 'Electric', 
          pokedex_entry: '', 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }
      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params
      updated_pokemon = Pokemon.find(pokemon.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['pokedex_entry']).to include "can't be blank"
    end

    it "doesn't update without a pokemon version" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'Pika', 
          pokemon_type: 'Electric', 
          pokedex_entry: '25', 
          pokemon_version: '', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }
      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params
      updated_pokemon = Pokemon.find(pokemon.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['pokemon_version']).to include "can't be blank"
    end

    it "doesn't update without a height" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'Pika', 
          pokemon_type: 'Electric', 
          pokedex_entry: '25', 
          pokemon_version: 'yellow', 
          height: '', 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }
      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params
      updated_pokemon = Pokemon.find(pokemon.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['height']).to include "can't be blank"
    end

    it "doesn't update without a weight" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'Pika', 
          pokemon_type: 'Electric', 
          pokedex_entry: '25', 
          pokemon_version: 'yellow', 
          height: '46', 
          weight: '', 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }
      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params
      updated_pokemon = Pokemon.find(pokemon.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['weight']).to include "can't be blank"
    end

    it "doesn't update without hp" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'Pika', 
          pokemon_type: 'Electric', 
          pokedex_entry: '25', 
          pokemon_version: 'yellow', 
          height: '46', 
          weight: 5.7, 
          hp: '', 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }
      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params
      updated_pokemon = Pokemon.find(pokemon.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['hp']).to include "can't be blank"
    end

    it "doesn't update without an ability" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'Pika', 
          pokemon_type: 'Electric', 
          pokedex_entry: '25', 
          pokemon_version: 'yellow', 
          height: '46', 
          weight: 5.7, 
          hp: '60', 
          ability: '', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }
      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params
      updated_pokemon = Pokemon.find(pokemon.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['ability']).to include "can't be blank"
    end

    it "doesn't update without an image" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'Pika', 
          pokemon_type: 'Electric', 
          pokedex_entry: '25', 
          pokemon_version: 'yellow', 
          height: '46', 
          weight: 5.7, 
          hp: '60', 
          ability: 'scratch', 
          image:'',
          user_id: user.id
        }
      }
      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params
      updated_pokemon = Pokemon.find(pokemon.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['image']).to include "can't be blank"
    end

    it "doesn't update without a user id" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.last
      updated_pokemon_params = {
        pokemon: {
          pokemon_name: 'Pikachu', 
          pokemon_nickname: 'Pika', 
          pokemon_type: 'Electric', 
          pokedex_entry: '25', 
          pokemon_version: 'yellow', 
          height: '46', 
          weight: 5.7, 
          hp: '60', 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: ''
        }
      }
      patch "/pokemons/#{pokemon.id}", params: updated_pokemon_params
      updated_pokemon = Pokemon.find(pokemon.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['user_id']).to include "can't be blank"
    end
  end
  describe "DELETE /destroy" do
    it "deletes a pokemon" do
      pokemon_params = {
        pokemon: {
          pokemon_name: 'Test', 
          pokemon_nickname: 'test nickname', 
          pokemon_type: 'poison', 
          pokedex_entry: 4, 
          pokemon_version: 'green', 
          height: 45, 
          weight: 5.7, 
          hp: 60, 
          ability: 'scratch', 
          image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          user_id: user.id
        }
      }

      post "/pokemons", params: pokemon_params

      pokemon = Pokemon.first
      pokemons = Pokemon.all
      
      delete "/pokemons/#{pokemon.id}"
      expect(response).to have_http_status(200)
      expect(pokemons).to be_empty
    end
  end
end
