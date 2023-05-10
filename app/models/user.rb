class User < ApplicationRecord
    has_many :reviews
    has_many :items, through: :reviews
 
    has_many :user_items
    has_many :items, through: :user_items

    has_secure_password

    validates :username, presence: true
    validates :password, presence: true, length: {minimum: 7}

end

# 1:1
# create an array of items purchased. .unique call. may also need to use .flatten
# create a model called item. grab carts, map throguh, find items to each individual cart 

def item
end
