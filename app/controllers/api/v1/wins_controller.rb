class Api::V1::WinsController < ApplicationController
  def index
    render json: Win.all
  end

  def show
    render json: Team.find(params[:id]).wins
  end
end
