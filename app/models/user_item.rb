class UserItem < ApplicationRecord
    belongs_to :user 
    belongs_to :item

    validates :quantity, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
