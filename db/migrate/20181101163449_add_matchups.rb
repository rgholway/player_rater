class AddMatchups < ActiveRecord::Migration[5.2]
  def change
    create_table :matchups do |t|
      t.belongs_to :game, null: false
      t.belongs_to :team, null: false
    end
  end
end
