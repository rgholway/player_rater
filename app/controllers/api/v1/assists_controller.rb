class Api::V1::AssistsController < ApplicationController

  def index
    render json: Player.all
  end

end
