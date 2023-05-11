class UserItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  # TODO : build out serializer so each item has its nested reviews
  has_many :reviews, each_serializer: ReviewSerializer
end
