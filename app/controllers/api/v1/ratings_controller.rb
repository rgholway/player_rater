class Api::V1::RatingsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def new
  end

  def index
    render json: Player.find(params[:player_id]).ratings
  end

  def create
    new_rating = Rating.create(description: rating_params[:description], score: rating_params[:score], player_id: rating_params[:player_id])
    render json: new_rating
  end

  def rating_params
    params.permit(:description, :score, :player_id)
  end
end
