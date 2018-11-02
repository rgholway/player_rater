Rails.application.routes.draw do
  root 'players#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :teams, only: [:index, :show] do
        resources :players, only: [:index, :show]
      end
      resources :players, only: [:index, :show] do
        resources :ratings, only: [:index, :create, :new]
      end
      resources :teams, only: [:index, :show] do
        resources :games, only: [:index, :show]
      end
        resources :wins, only: [:index, :show]
      end
  end
  root 'players#index'
  get '/teams/:team_id/players', to: 'players#index'
  get '/players/:id', to: 'players#index'
  get '/teams/:id', to: 'players#index'
end
