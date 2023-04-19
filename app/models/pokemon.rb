class Pokemon < ApplicationRecord
  belongs_to :user

  validates :user_id, :pokemon_name, :pokemon_nickname, :pokemon_type, :pokedex_entry, :pokemon_version, :height, :weight, :hp, :ability, :image, presence: true

  
end
