class Api::V1::PositionsController < ApplicationController

  def index
    render json: Position.all
  end

  def update
    selected_position = Position.find(params[:id])
    selected_position.update(photo: params[:_json][0])
    selected_position.update(last_name: params[:_json][1])
    selected_position.update(position: params[:_json][2])
    binding.pry
  end

end
