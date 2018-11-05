class AddRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :score, null: false
      t.text :description, null: false

      t.belongs_to :player

      t.timestamps null: false
    end
  end
end
