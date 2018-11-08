class Rating < ApplicationRecord
  validates_presence_of :score, :description

  belongs_to :player
  belongs_to :user

end
