class Species < ApplicationRecord
  belongs_to :group
  has_many :pictures, dependent: :destroy

  serialize :characteristics, Array
  serialize :similar_species, Array
end
