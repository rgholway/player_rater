class AddTeams < ActiveRecord::Migration[5.2]
    def change
      create_table :teams do |t|
        t.string :name, null: false
        t.string :city, null: false
        t.string :nickname, null: false
        t.string :badge, null: false
        t.string :stadium
        t.string :stadium_location
        t.string :head_coach
        t.integer :points

        t.timestamps null: false
      end
    end
  end
