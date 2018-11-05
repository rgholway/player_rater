class Team < ApplicationRecord
  validates_presence_of :name, :nickname, :city, :badge

  has_many :players
  has_many :wins
  has_many :draws
  has_many :losses

  has_many :matchups
  has_many :games, through: :matchups

end
