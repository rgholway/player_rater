class Api::V1::GoalsController < ApplicationController

  def show
    render json: Game.find(params[:game_id]).goals
  end

  def index
    render json: Goal.all
  end

end
