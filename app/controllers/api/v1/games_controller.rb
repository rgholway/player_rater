class Api::V1::GamesController < ApplicationController

  def index
    render json: Team.find(params[:team_id]).games
  end
  
end
