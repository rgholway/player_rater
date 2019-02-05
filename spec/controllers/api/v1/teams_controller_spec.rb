require 'rails_helper'

RSpec.describe Api::V1::TeamsController, type: :controller do
  before(:each) do
    Team.create(name: "Soccer Team", city: "Palermo", nickname: "Pink Team", badge: "image")
    Team.create(name: "Yellow Team", city: "Venice", nickname: "Water City", badge: "image")
  end

  after(:each) do
    Team.destroy_all
  end

   describe "GET#index" do
    it "should return a list of all the games" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(returned_json.length).to eq 2
      expect(returned_json[1]["city"]).to eq "Palermo"
     end
  end
end
