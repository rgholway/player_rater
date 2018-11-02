class Player < ApplicationRecord
  validates_presence_of :first_name, :last_name, :number, :position

  belongs_to :team

  has_many :ratings

  has_many :goals
  has_many :assists

end
