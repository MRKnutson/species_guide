class CreatePhylums < ActiveRecord::Migration[6.1]
  def change
    create_table :phylums do |t|
      t.string :name

      t.timestamps
    end
  end
end
