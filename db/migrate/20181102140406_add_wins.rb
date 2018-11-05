class AddWins < ActiveRecord::Migration[5.2]
  def change
    create_table :wins do |t|
      t.belongs_to :team, null: false
    end
  end
end
