class AddGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :home_team, null: false
      t.string :away_team, null: false
      t.string :home_score, null: false
      t.string :away_score, null: false
      t.string :date, null: false

      t.timestamps null: false
    end
  end
end
