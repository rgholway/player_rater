class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :number, null: false
      t.string :position, null: false
      t.string :goals
      t.string :games
      t.string :photo

    end
  end
end
