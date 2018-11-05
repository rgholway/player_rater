class Api::V1::GamesController < ApplicationController

  def index
    render json: Team.find(params[:team_id]).games
  end

  def show
    render json: Game.find(params[:id])
  end
end
