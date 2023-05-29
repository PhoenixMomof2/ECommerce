class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :image

  has_many :reviews
end
