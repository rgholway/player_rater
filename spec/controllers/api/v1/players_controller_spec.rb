require 'rails_helper'

RSpec.describe Api::V1::PlayersController, type: :controller do
  before(:each) do
    Team.create(name: "Soccer Team", city: "Palermo", nickname: "Pink Team", badge: "image")
    Player.create(first_name: "Fabrizio", last_name: "Miccoli", number: "10", position: "Striker", team: Team.last )
    Player.create(first_name: "Zlatan", last_name: "Ibrahimovic", number: "10", position: "Striker", team: Team.last )
  end

  after(:each) do
    Team.destroy_all
    Player.destroy_all
  end

   describe "GET#index" do
    it "should return a list of all the players for the first team" do
      expect(Team.last.players.first.first_name).to eq "Fabrizio"
      expect(Team.last.players.last.last_name).to eq "Ibrahimovic"
      expect(Team.last.players.last.number).to eq "10"
     end
  end
end
