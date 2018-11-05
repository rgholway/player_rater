class AddAssists < ActiveRecord::Migration[5.2]
  def change
    create_table :assists do |t|
      t.belongs_to :game, null: false
      t.belongs_to :player, null: false
    end
  end
end
