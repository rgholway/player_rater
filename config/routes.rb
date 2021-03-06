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
      resources :games, only: [:index, :show] do
        resources :players, only: [:index, :show]
      end
      resources :games, only: [:index, :show] do
        resources :goals, only: [:index]
      end
      post 'assists/search', to: 'assists#search'
      resources :formations, only: [:index, :update]
      resources :positions, only: [:index, :update]
      resources :assists, only: [:index]
      resources :losses, only: [:index]
      resources :weeks, only: [:index, :show, :new, :create]
    end
  end
  root 'players#index'
  get '/teams/:team_id/players', to: 'players#index'
  get '/players/:id', to: 'players#index'
  get '/teams/:id', to: 'players#index'
  get '/totw/:id', to: 'players#index'
  get '/create_team', to: 'players#index'
  get '/champions', to: 'players#index'
  get '/teams/:team_id/games/:id', to: 'players#index'
  get 'games/:game_id/players/:player_id', to: 'players#index'
  post 'assists/search', to: 'assists#search'
end
