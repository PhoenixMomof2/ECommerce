class Review < ApplicationRecord
    belongs_to :user
    belongs_to :item

    validates :title, :review, presence: true
end
