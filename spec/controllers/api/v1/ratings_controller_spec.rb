require 'rails_helper'

RSpec.describe Api::V1::RatingsController, type: :controller do
  before(:each) do
    Team.create(name: "Soccer Team", city: "Palermo", nickname: "Pink Team", badge: "image")
    Player.create(first_name: "Fabrizio", last_name: "Miccoli", number: "10", position: "Striker", team: Team.last )
    Player.create(first_name: "Zlatan", last_name: "Ibrahimovic", number: "10", position: "Striker", team: Team.last )
    User.create(email: "MrManager@bluthcompany.com", password: "Maybe1", password_confirmation: "Maybe1")
    Rating.create(score: 7, description: "Fantastico scored an awesome goal", player: Player.last, user: User.last)
  end

  it "creates a new rating" do
      post(:create, params: {user_id: User.last.id, player_id: Player.last.id, score: Rating.last.score, description: Rating.last.description})
      expect(Rating.count).to eq 1
      expect(Rating.first.score).to eq 7
      expect(Rating.first.description).to eq "Fantastico scored an awesome goal"
    end

  after(:each) do
    Team.destroy_all
    Player.destroy_all
    User.destroy_all
    Rating.destroy_all
  end
end
