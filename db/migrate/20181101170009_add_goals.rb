class AddGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :team, null: false
      t.string :minute, null: false

      t.belongs_to :game, null: false
      t.belongs_to :player, null: false
    end
  end
end
