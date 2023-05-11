class Item < ApplicationRecord
    has_many :user_items
    has_many :users, through: :user_items
    has_many :reviews
    has_many :new_users, through: :reviews

    validates :name, presence: true
    validates :description, presence: true
    validates :price, presence: true
    validates :image, presence: true

    #Protecting Data create validations to protect the app from ppl going in with a 3rd party application and creating/destroying data.
end
