class Rating < ApplicationRecord
  validates_presence_of :score, :description

  belongs_to :player

end
