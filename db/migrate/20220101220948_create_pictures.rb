class CreatePictures < ActiveRecord::Migration[6.1]
  def change
    create_table :pictures do |t|
      t.string :location
      t.belongs_to :species, null: false, foreign_key: true

      t.timestamps
    end
  end
end
