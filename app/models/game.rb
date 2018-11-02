class Game < ApplicationRecord

  has_many :matchups
  has_many :teams, through: :matchups

  has_many :goals
  has_many :assists

end
