class Item < ApplicationRecord
    has_many :user_items
    has_many :users, through: :user_items
    has_many :reviews
    has_many :users, through: :reviews
end
