class UserItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity

  belongs_to :item
  has_many :reviews
  has_many :users
end
