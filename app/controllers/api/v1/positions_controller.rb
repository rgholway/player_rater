class Api::V1::PositionsController < ApplicationController

  def index
    render json: Position.all
  end

  def update
    selected_position = Position.find(params[:id])
    selected_position.update(photo: params[:_json])
  end

end
