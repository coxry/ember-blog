Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts, except: [:new, :edit]
      post :token, to: 'sessions#create'
      delete :token, to: 'sessions#delete'
    end
  end
end
