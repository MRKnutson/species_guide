class Group < ApplicationRecord
  belongs_to :phylum
  has_many :species, dependent: :destroy
end
