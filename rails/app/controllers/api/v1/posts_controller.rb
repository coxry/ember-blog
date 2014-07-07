class Api::V1::PostsController < ApplicationController
  before_action :authorize

  def index
    render json: Post.all
  end

  def show
    render json: Post.find(params[:id])
  end

end
