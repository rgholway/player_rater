class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :number, null: false
      t.string :position, null: false
      t.string :goals
      t.string :games
      t.string :badge
      t.string :photo
      t.string :nation
      t.string :short_position
      t.string :full_position

      t.belongs_to :team

      t.timestamps null: false

    end
  end
end
