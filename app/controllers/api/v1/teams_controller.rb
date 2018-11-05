class Api::V1::TeamsController < ApplicationController
  def index
    render json: Team.all.order(:points).reverse
  end

  def show
    render json: Team.find(params[:id])
  end

end
