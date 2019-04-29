# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_28_211436) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assists", force: :cascade do |t|
    t.bigint "game_id", null: false
    t.bigint "player_id", null: false
    t.index ["game_id"], name: "index_assists_on_game_id"
    t.index ["player_id"], name: "index_assists_on_player_id"
  end

  create_table "draws", force: :cascade do |t|
    t.bigint "team_id", null: false
    t.index ["team_id"], name: "index_draws_on_team_id"
  end

  create_table "formations", force: :cascade do |t|
    t.string "formation", null: false
    t.boolean "active"
  end

  create_table "games", force: :cascade do |t|
    t.string "home_team", null: false
    t.string "away_team", null: false
    t.string "home_score", null: false
    t.string "away_score", null: false
    t.string "date", null: false
    t.string "week", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "goals", force: :cascade do |t|
    t.string "team", null: false
    t.string "minute", null: false
    t.bigint "game_id", null: false
    t.bigint "player_id", null: false
    t.index ["game_id"], name: "index_goals_on_game_id"
    t.index ["player_id"], name: "index_goals_on_player_id"
  end

  create_table "losses", force: :cascade do |t|
    t.bigint "team_id", null: false
    t.index ["team_id"], name: "index_losses_on_team_id"
  end

  create_table "matchups", force: :cascade do |t|
    t.bigint "game_id", null: false
    t.bigint "team_id", null: false
    t.index ["game_id"], name: "index_matchups_on_game_id"
    t.index ["team_id"], name: "index_matchups_on_team_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "number", null: false
    t.string "position", null: false
    t.string "goals"
    t.string "games"
    t.string "photo"
    t.string "nation"
    t.string "short_position"
    t.string "full_position"
    t.bigint "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "positions", force: :cascade do |t|
    t.string "name", null: false
    t.string "last_name"
    t.string "photo"
    t.string "position"
    t.bigint "week_id"
    t.index ["week_id"], name: "index_positions_on_week_id"
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "score", null: false
    t.text "description", null: false
    t.bigint "player_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_ratings_on_player_id"
    t.index ["user_id"], name: "index_ratings_on_user_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name", null: false
    t.string "city", null: false
    t.string "nickname", null: false
    t.string "badge", null: false
    t.string "stadium"
    t.string "stadium_location"
    t.string "head_coach"
    t.integer "points"
    t.string "lat"
    t.string "long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "weeks", force: :cascade do |t|
    t.bigint "user_id"
    t.string "title"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_weeks_on_user_id"
  end

  create_table "wins", force: :cascade do |t|
    t.bigint "team_id", null: false
    t.index ["team_id"], name: "index_wins_on_team_id"
  end

end
