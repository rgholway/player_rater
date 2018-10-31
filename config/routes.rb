Rails.application.routes.draw do
  root 'players#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :teams, only: :index do
        resources :players, only: [:index, :show]
      end
      resources :players, only: [:index, :show] do
        resources :reviews, only: [:index]
      end
    end
  end
  root 'players#index'
  get '/teams/:team_id/players', to: 'players#index'
end
