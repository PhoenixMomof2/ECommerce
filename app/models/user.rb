class User < ApplicationRecord
    has_many :carts
    # has_many :cart_items, throguh: :carts 
 
    # has_many :cart_items
    # has_many :items, through: :cart_items

    has_secure_password
end


# create an array of items purchased. .unique call. may also need to use .flatten
# create a model called item. grab carts, map throguh, find items to each individual cart 

def item
end
