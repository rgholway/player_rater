class AddDraws < ActiveRecord::Migration[5.2]
  def change
    create_table :draws do |t|
      t.belongs_to :team, null: false
    end
  end
end
