class PokemonsController < ApplicationController
  def index
    pokemons = Pokemon.all
    render json: pokemons
  end

  def create
    pokemon = Pokemon.create(pokemon_params)
    if pokemon.valid?
      render json: pokemon      
    else
      render json: pokemon.errors, status: 422
    end
  end

  def update
    pokemon = Pokemon.find(params[:id])
    pokemon.update(pokemon_params)
    if pokemon.valid?
      render json: pokemon
    else
        render json: pokemon.errors, status: 422
    end
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:user_id, :pokemon_name, :pokemon_nickname, :pokemon_type, :pokedex_entry, :pokemon_version, :height, :weight, :hp, :ability, :image)
  end

end
