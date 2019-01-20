class CreateFormation < ActiveRecord::Migration[5.2]
  def change
    create_table :formations do |t|
      t.string :formation, null:false
      t.boolean :active
    end
  end
end
