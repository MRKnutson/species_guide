class CreateSpecies < ActiveRecord::Migration[6.1]
  def change
    create_table :species do |t|
      t.string :common_name
      t.string :scientific_name
      t.integer :rcode
      t.string :image
      t.text :description
      t.text :characteristics
      t.text :similar_species
      t.belongs_to :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
