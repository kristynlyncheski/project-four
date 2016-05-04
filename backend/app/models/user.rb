class User < ActiveRecord::Base
  has_and_belongs_to_many :songs,
  has_many :playlists
end