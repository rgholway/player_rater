class CreatePosition < ActiveRecord::Migration[5.2]
  def change
    create_table :positions do |t|
      t.string :name, null: false
    end
  end
end