class Api::V1::SessionsController < ApplicationController
  include Authentication

  def delete
    Authentication.invalidateToken(request.headers["HTTP_AUTHORIZATION"])
  end

  def create
    user = User.find_by(user: params[:name])

    if user.present? && user.authenticate(params[:password])
      Authentication.invalidateToken(request.headers["HTTP_AUTHORIZATION"])
      access_token = Authentication.createToken()
      logger.info(request.headers)
      logger.info(access_token)
      render :json => {
        :access_token => access_token
      }
    else
      render :json => {}, :status => :unauthorized
    end
  end

end
