Rails.application.routes.draw do
  root 'players#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :players, only: :index
    end
  end
  root 'players#index'
end
