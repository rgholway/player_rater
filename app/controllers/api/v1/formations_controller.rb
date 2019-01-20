class Api::V1::FormationsController < ApplicationController

  def index
    render json: Formation.all
  end

  def update
    formations = Formation.all
    formations.update(active: "false")
    user_formation = Formation.find(params[:id])
    user_formation.update(active: "true")
  end

end
