class User < ApplicationRecord
    has_many :carts
end


# create an array of items purchased. .unique call. may also need to use .flatten
# create a model called item. grab carts, map throguh, find items to each individual cart 