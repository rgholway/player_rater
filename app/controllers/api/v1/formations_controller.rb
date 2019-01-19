class Api::V1::FormationsController < ApplicationController

  def index
    render json: Formation.all
  end

end
