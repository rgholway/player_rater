class Api::V1::DrawsController < ApplicationController
  def index
    render json: Draw.all
  end
end
