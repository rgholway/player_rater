class Position < ApplicationRecord
  validates_presence_of :name

  belongs_to :week
end
