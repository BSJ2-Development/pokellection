class CreatePokemons < ActiveRecord::Migration[7.0]
  def change
    create_table :pokemons do |t|
      t.integer :user_id
      t.string :pokemon_name
      t.string :pokemon_nickname
      t.string :pokemon_type
      t.integer :pokedex_entry
      t.string :pokemon_version
      t.float :height
      t.float :weight
      t.integer :hp
      t.string :ability
      t.text :image

      t.timestamps
    end
  end
end
