class Api::V1::GoalsController < ApplicationController

  def index
    render json: Game.find(params[:game_id]).goals
  end

end
