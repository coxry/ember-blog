class ApplicationController < ActionController::API

  def authorize
    unless Authentication.validToken?(request.headers["HTTP_AUTHORIZATION"])
      render :json => {}, :status => :unauthorized
    end
  end

end
