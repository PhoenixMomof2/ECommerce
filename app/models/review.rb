class Review < ApplicationRecord
    belongs_to :user
    belongs_to :item

    validates :title, presence: true
    validates :review, presence: true, length: { in: 10..100 } 
end
