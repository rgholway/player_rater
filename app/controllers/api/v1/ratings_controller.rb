class Api::V1::RatingsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def new
  end

  def index
    render json: Player.find(params[:player_id]).ratings.order("created_at DESC")
  end

  def create
    new_rating = Rating.new(description: rating_params[:description], score: rating_params[:score], player_id: rating_params[:player_id], user: current_user)
    if new_rating.save
    render json: new_rating
    end
  end

  def rating_params
    params.permit(:description, :score, :player_id)
  end
end
