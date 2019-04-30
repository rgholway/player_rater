class CreateWeeks < ActiveRecord::Migration[5.2]
  def change
    create_table :weeks do |t|
      t.belongs_to :user

      t.string :title
      t.string :description

      t.timestamps null: false
    end
  end
end
