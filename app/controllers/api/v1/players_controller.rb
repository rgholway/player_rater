class Api::V1::PlayersController < ApplicationController
  def index
    render json: Team.find(params[:team_id]).players
  end

  def show
    render json: Player.find(params[:id])
  end
end
