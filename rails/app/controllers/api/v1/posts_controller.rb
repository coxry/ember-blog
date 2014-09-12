class Api::V1::PostsController < ApplicationController
  before_action :authorize, only: [:update]

  def index
    render json: Post.all
  end

  def show
    render json: Post.find(params[:id])
  end

  def update
    Post.find(params[:id]).update(post_params)
  end

  private
    def post_params
      params.require(:post).permit(:title, :body)
    end

end
