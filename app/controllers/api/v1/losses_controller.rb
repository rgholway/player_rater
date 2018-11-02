class Api::V1::LossesController < ApplicationController
  def index
    render json: Loss.all
  end
end
