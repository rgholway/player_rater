class CreatePosition < ActiveRecord::Migration[5.2]
  def change
    create_table :positions do |t|
      t.string :name, null: false
      t.string :last_name
      t.string :photo
      t.string :position

      t.belongs_to :week
    end
  end
end
