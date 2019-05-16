class Api::V1::AssistsController < ApplicationController

  def index
    render json: Player.all.order(:last_name)
  end

end
