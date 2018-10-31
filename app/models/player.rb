class Player < ApplicationRecord
  validates_presence_of :first_name, :last_name, :number, :position

end
