class AddLosses < ActiveRecord::Migration[5.2]
  def change
    create_table :losses do |t|
      t.belongs_to :team, null: false
    end
  end
end
