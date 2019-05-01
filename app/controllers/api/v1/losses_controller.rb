class Api::V1::LossesController < ApplicationController

  def index
    selected_weeks = Week.where(user: current_user)
    render json: selected_weeks
  end

end
