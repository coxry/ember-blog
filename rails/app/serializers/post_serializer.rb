# Serializer for blog posts
class PostSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :title, :body
end
