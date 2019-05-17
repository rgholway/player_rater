class Api::V1::AssistsController < ApplicationController

  def index
    render json: Player.all.order(:last_name)
  end

  def search
  @players = Player.where("last_name ILIKE ? or full_position ILIKE ? or nation ILIKE ? or position ILIKE ? or short_position ILIKE ?", "%#{params['search_string']}%", "%#{params['search_string']}%", "%#{params['search_string']}%", "%#{params['search_string']}%", "%#{params['search_string']}%")
  render json: @players
end

end
