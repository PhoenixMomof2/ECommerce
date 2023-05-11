class User < ApplicationRecord
    has_many :reviews
    has_many :cart_items, through: :reviews
 
    has_many :user_items
    has_many :items, through: :user_items

    has_secure_password

    validates :username, presence: true
    validates :password, presence: true, length: {minimum: 7}

end