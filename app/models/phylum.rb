class Phylum < ApplicationRecord
  has_many :groups, dependent: :destroy
end
