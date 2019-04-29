class Api::V1::WeeksController < ApplicationController

def create
  new_week = Week.create(user: current_user)
  Position.create(name: "first", week_id: new_week.id)
  Position.create(name: "second", week_id: new_week.id)
  Position.create(name: "third", week_id: new_week.id)
  Position.create(name: "fourth", week_id: new_week.id)
  Position.create(name: "fifth", week_id: new_week.id)
  Position.create(name: "sixth", week_id: new_week.id)
  Position.create(name: "seventh", week_id: new_week.id)
  Position.create(name: "eigth", week_id: new_week.id)
  Position.create(name: "ninth", week_id: new_week.id)
  Position.create(name: "tenth", week_id: new_week.id)
  Position.create(name: "eleventh", week_id: new_week.id)
  render json: new_week.id
end

def show
  render json: Week.find(params[:id]).positions
end

end
