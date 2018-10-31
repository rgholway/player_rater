class Team < ApplicationRecord
  validates_presence_of :name, :nickname, :city, :badge

  has_many :players

end
