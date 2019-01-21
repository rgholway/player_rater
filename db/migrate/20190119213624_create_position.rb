class CreatePosition < ActiveRecord::Migration[5.2]
  def change
    create_table :positions do |t|
      t.string :name, null: false
      t.string :photo
      t.string :position
      t.string :last_name
    end
  end
end
