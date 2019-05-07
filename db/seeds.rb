teams = [
  {name: "Fiorentina", city: "Florence", nickname: "La Viola", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000111.png", points: "", lat: "43.7808", long: "11.2826", stadium: "Stadio Artemio Franchi"},
  {name: "Juventus", city: "Turin", nickname: "I Bianconeri", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000070.png", points: "", lat: "45.1096", long: "7.6413", stadium: "Allianz Arena"},
  {name: "AC_Milan", city: "Milan", nickname: "I Rossoneri", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png", points: "", lat: "45.4781", long: "9.1240", stadium: "San Siro"},
  {name: "Inter_Milan", city: "Milan", nickname: "I Nerrazzuri", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/44.png", points: "", lat: "45.4781", long: "9.1240", stadium: "San Siro"},
  {name: "Roma", city: "Rome", nickname: "I Giallorossi", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000084.png", points: "", lat: "41.9341", long: "12.4547", stadium: "Stadio Olimpico"},
  {name: "Lazio", city: "Rome", nickname: "I Biancocelesti", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/46.png", points: "", lat: "41.9341", long: "12.4547", stadium: "Stadio Olimpico"},
  {name: "Torino", city: "Turin", nickname: "I Granata", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/54.png", points: "", lat: "45.0418", long: "7.6501", stadium: "Stadio Olimpico Grande Torino"},
  {name: "Atalanta", city: "Atalanta", nickname: "I Nerrazzuri", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000181.png", points: "", lat: "45.7092", long: "9.6808", stadium:"Stadio Atleti Azzurri d'Italia"},
  {name: "Genoa", city: "Genoa", nickname: "I Rossoblu", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/110556.png", points: "", lat: "44.4165", long: "8.9525", stadium: "Stadio Luigi Ferraris" },
  {name: "Sampdoria", city: "Genoa", nickname: "Blucerchiati", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/1837.png", points: "", lat: "44.4165", long: "8.9525", stadium: "Stadio Luigi Ferraris"},
  {name: "Napoli", city: "Naples", nickname: "Gli Azzuri", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000083.png", points: "", lat: "40.8279", long: "14.1931", stadium: "Stadio San Paolo"},
  {name: "Sassuolo", city: "Sassuolo", nickname: "I Neroverdi", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000180.png", points: "", lat: "44.7145", long: "10.6497", stadium: "Stadio Mapei "},
  {name: "Cagliari", city: "Cagliari", nickname: "I Rossoblu", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000230.png", points: "", lat: "39.1998", long: "9.1375", stadium: "Sardegna Arena"},
  {name: "Parma", city: "Parma", nickname: "I Gialloblu", badge: "https://i.pinimg.com/originals/ac/a7/97/aca7979bdc00add6bb7a1beb2557641c.png", points: "", lat: "44.7948", long: "10.3383", stadium: "Stadio Ennio Tardini"},
  {name: "SPAL", city: "Ferrara", nickname: "I Biancoazzuri", badge: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/4377.png", points: "", lat: "44.8402", long: "11.6080", stadium: "Stadio Paolo Mazza"},
  {name: "ChievoVerona", city: "Verona", nickname: "I Gialloblu", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000158.png", points: "", lat: "45.4353", long: "10.9686", stadium: "Stadio Marc'Antonio Bentegodi"},
  {name: "Udinese", city: "Udinese", nickname: "Bianconeri Friuliani", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/55.png", points: "", lat: "46.0815", long: "13.1998", stadium: "Stadio Friuli"},
  {name: "Bologna", city: "Bologna", nickname: "I Rossoblu", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000157.png", points: "", lat: "44.4923", long: "11.3100", stadium: "Stadio Renato Dall'Ara"},
  {name: "Empoli", city: "Empoli", nickname: "Gli Azzuri", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000229.png", points: "", lat: "43.7265", long: "10.9548", stadium: "Stadio Carlo Castellani"},
  {name: "Frosinone", city: "Frosinone", nickname: "I Giallazzuri", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000382.png", points: "", lat: "41.6341", long: "13.3219", stadium: "Stadio Benito Stirpe"}
]

teams.each do |team|
  Team.create (team)
end
fiorentina = Team.find_by(name: "Fiorentina")
fiorentina_players = [
  {first_name: "Alban", last_name: "Lafont", number: "1", position: "goalie", short_position: "GK", full_position: "Goalie", photo: "https://www.footballdatabase.eu/images/photos/players/a_280/280759.jpg", team: fiorentina, nation: "France"},
  {first_name: "Nikola", last_name: "Milenkovic", number: "4", position: "rightback", short_position: "RB", full_position: "Right Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_289/289688.jpg", team: fiorentina, nation: "Serbia"},
  {first_name: "German", last_name: "Pezella", number: "20", position: "rightcenterback", short_position: "CB", full_position: "Center Back", photo:"https://www.footballdatabase.eu/images/photos/players/a_154/154550.jpg", team: fiorentina, nation: "Argentina" },
  {first_name: "Vitor", last_name: "Hugo", number: "31", position: "leftcenterback", short_position: "CB", full_position: "Center Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_149/149671.jpg", team: fiorentina, nation: "Brazil" },
  {first_name: "Christiano", last_name: "Biraghi", number: "3", position: "leftback", short_position: "LB", full_position: "Left Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_122/122924.jpg", team: fiorentina, nation: "Italy" },
  {first_name: "Marco", last_name: "Benassi", number: "24", position: "rightcentermidfield", short_position: "CM", full_position: "Center Midfield", photo: "https://www.footballdatabase.eu/images/photos/players/a_185/185282.jpg", team: fiorentina, nation: "Italy" },
  {first_name: "Cyril", last_name: "Thereau", number: "8", position: "leftcentermidfield", short_position: "CM", full_position: "Center Midfield", photo: "https://www.footballdatabase.eu/images/photos/players/a_16/16913.jpg", team: fiorentina, nation: "Brazil" },
  {first_name: "Jordan", last_name: "Veretout", number: "17", position: "defensivecentermidfield", short_position: "CDM", full_position: "Center Defensive Midfield", photo: "https://www.footballdatabase.eu/images/photos/players/a_118/118887.jpg", team: fiorentina, nation: "France" },
  {first_name: "Federico", last_name: "Chiesa", number: "25", position: "rightforward", short_position: "RW", full_position: "Right Wing", photo: "https://www.footballdatabase.eu/images/photos/players/a_262/262615.jpg", team: fiorentina, nation: "Italy" },
  {first_name: "Valentin", last_name: "Eysseric", number: "7", position: "leftforward", short_position: "LW", full_position: "Left Wing", photo: "https://www.footballdatabase.eu/images/photos/players/a_114/114647.jpg", team: fiorentina, nation: "France" },
  {first_name: "Giovanni", last_name: "Simeone", number: "9", position: "centerforward", short_position: "ST", full_position: "Striker", photo: "https://www.footballdatabase.eu/images/photos/players/a_206/206189.jpg", team: fiorentina, nation: "Argentina" }
]
fiorentina_players.each do |player|
  Player.create(player)
end

fiorentina_games = [
  {home_team: "Fiorentina", away_team: "Chievo Verona", home_score: "6", away_score: "1", date: "8/26", week: "1"},
  {home_team: "Fiorentina", away_team: "Udinese", home_score: "1", away_score: "0", date: "9/2", week: "2"},
  {home_team: "Napoli", away_team: "Fiorentina", home_score: "1", away_score: "0", date: "9/15", week: "3"},
  {home_team: "Sampdoria", away_team: "Fiorentina", home_score: "1", away_score: "1", date: "9/19", week: "4"},
  {home_team: "Fiorentina", away_team: "SPAL", home_score: "3", away_score: "0", date: "9/22", week: "5"},
  {home_team: "Inter Milan", away_team: "Fiorentina", home_score: "2", away_score: "1", date: "9/25", week: "6"},
  {home_team: "Fiorentina", away_team: "Atalanta", home_score: "2", away_score: "0", date: "9/30", week: "7"},
  {home_team: "Lazio", away_team: "Fiorentina", home_score: "1", away_score: "0", date: "10/7", week: "8"},
  {home_team: "Fiorentina", away_team: "Cagliari", home_score: "1", away_score: "1", date: "10/21", week: "9"},
  {home_team: "Torino", away_team: "Fiorentina", home_score: "1", away_score: "1", date: "10/27", week: "10"}
]

fiorentina_games.each do |game|
  Game.create(game)
end

fiorentina_matchups = [
  {game_id: 1, team_id: fiorentina.id},
  {game_id: 2, team_id: fiorentina.id},
  {game_id: 3, team_id: fiorentina.id},
  {game_id: 4, team_id: fiorentina.id},
  {game_id: 5, team_id: fiorentina.id},
  {game_id: 6, team_id: fiorentina.id},
  {game_id: 7, team_id: fiorentina.id},
  {game_id: 8, team_id: fiorentina.id},
  {game_id: 9, team_id: fiorentina.id},
  {game_id: 10, team_id: fiorentina.id}
]

fiorentina_matchups.each do |matchup|
  Matchup.create(matchup)
end

juventus = Team.find_by(name: "Juventus")

juventus_games = [
  {home_team: "Chievo Verona", away_team: "Juventus", home_score: "2", away_score: "3", date: "8/18", week: "1"},
  {home_team: "Juventus", away_team: "Lazio", home_score: "2", away_score: "0", date: "8/25", week: "2"},
  {home_team: "Parma", away_team: "Juventus", home_score: "1", away_score: "2", date: "9/1", week: "3"},
  {home_team: "Juventus", away_team: "Sassuolo", home_score: "2", away_score: "1", date: "9/16", week: "4"},
  {home_team: "Frosinone", away_team: "Juventus", home_score: "0", away_score: "2", date: "9/23", week: "5"},
  {home_team: "Juventus", away_team: "Bologna", home_score: "2", away_score: "0", date: "9/26", week: "6"},
  {home_team: "Juventus", away_team: "Napoli", home_score: "3", away_score: "1", date: "9/29", week: "7"},
  {home_team: "Udinese", away_team: "Juventus", home_score: "0", away_score: "2", date: "10/6", week: "8"},
  {home_team: "Juventus", away_team: "Genoa", home_score: "1", away_score: "1", date: "10/20", week: "9"},
  {home_team: "Empoli", away_team: "Juventus", home_score: "1", away_score: "2", date: "10/27", week: "10"}
]

juventus_games.each do |game|
  Game.create(game)
end

juventus_matchups = [
  {game_id: 11, team_id: juventus.id},
  {game_id: 12, team_id: juventus.id},
  {game_id: 13, team_id: juventus.id},
  {game_id: 14, team_id: juventus.id},
  {game_id: 15, team_id: juventus.id},
  {game_id: 16, team_id: juventus.id},
  {game_id: 17, team_id: juventus.id},
  {game_id: 18, team_id: juventus.id},
  {game_id: 19, team_id: juventus.id},
  {game_id: 20, team_id: juventus.id}
]

juventus_matchups.each do |matchup|
  Matchup.create(matchup)
end

juventus_players = [
  {first_name: "Wojciech", last_name: "Szczesny", number: "1", position: "goalie", short_position: "GK", full_position: "Goalie", photo: "https://www.footballdatabase.eu/images/photos/players/a_75/75667.jpg", team: juventus, nation: "Poland"},
  {first_name: "Joao", last_name: "Cancelo", number: "20", position: "rightback", short_position: "RB", full_position: "Right Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_176/176621.jpg", team: juventus, nation: "Portugal"},
  {first_name: "Leonardo", last_name: "Bonucci", number: "19", position: "rightcenterback", short_position: "CB", full_position: "Center Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_15/15198.jpg", team: juventus, nation: "Italy"},
  {first_name: "Giorgio", last_name: "Chiellini", number: "3", position: "leftcenterback", short_position: "CB", full_position: "Center Back",photo: "https://www.footballdatabase.eu/images/photos/players/a_4/4688.jpg", team: juventus, nation: "Italy"},
  {first_name: "Alex", last_name: "Sandro", number: "12", position: "leftback", short_position: "LB", full_position: "Left Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_48/48455.jpg", team: juventus, nation: "Brazil"},
  {first_name: "Blaise", last_name: "Matuidi", number: "14", position: "defensivecentermidfield",short_position: "CDM", full_position: "Center Defensive Mid", photo: "https://www.footballdatabase.eu/images/photos/players/a_11/11646.jpg", team: juventus, nation: "France"},
  {first_name: "Miralem", last_name: "Pjanic", number: "5", position: "leftcentermidfield", short_position: "CM", full_position: "Center Midfield", photo: "https://www.footballdatabase.eu/images/photos/players/a_21/21817.jpg", team: juventus, nation: "Bosnia and Herzegovina"},
  {first_name: "Paulo", last_name: "Dybala", number: "10", position: "rightcentermidfield", short_position: "CM", full_position: "Center Midfield", photo: "https://www.footballdatabase.eu/images/photos/players/a_148/148984.jpg", team: juventus, nation: "Argentina"},
  {first_name: "Christiano", last_name: "Ronaldo", number: "7", position: "leftforward", short_position: "LW", full_position: "Left Wing", photo: "https://www.footballdatabase.eu/images/photos/players/a_2/2058.jpg", team: juventus, nation: "Portugal"},
  {first_name: "Juan", last_name: "Cuadrado", number: "16", position: "rightforward", short_position: "RW", full_position: "Right Wing", photo: "https://www.footballdatabase.eu/images/photos/players/a_58/58207.jpg", team: juventus, nation: "Colombia"},
  {first_name: "Mario", last_name: "Mandzukic", number: "17", position: "centerforward", short_position: "CF", full_position: "Striker", photo: "https://www.footballdatabase.eu/images/photos/players/a_20/20854.jpg", team: juventus, nation: "Croatia"}
]
juventus_players.each do |player|
  Player.create(player)
end

roma = Team.find_by(name: "Roma")

roma_games = [
  {home_team: "Torino", away_team: "Roma", home_score: "1", away_score: "0", date: "8/19", week: "1"},
  {home_team: "Roma", away_team: "Atalanta", home_score: "3", away_score: "3", date: "8/27", week: "2"},
  {home_team: "Milan", away_team: "Roma", home_score: "2", away_score: "1", date: "8/31", week: "3"},
  {home_team: "Roma", away_team: "Chievo", home_score: "2", away_score: "2", date: "9/16", week: "4"},
  {home_team: "Bologna", away_team: "Roma", home_score: "2", away_score: "0", date: "9/23", week: "5"},
  {home_team: "Roma", away_team: "Frosinone", home_score: "4", away_score: "0", date: "9/26", week: "6"},
  {home_team: "Roma", away_team: "Lazio", home_score: "3", away_score: "1", date: "9/29", week: "7"},
  {home_team: "Empoli", away_team: "Roma", home_score: "0", away_score: "2", date: "10/6", week: "8"},
  {home_team: "Roma", away_team: "SPAL", home_score: "0", away_score: "2", date: "10/20", week: "9"},
  {home_team: "Napoli", away_team: "Roma", home_score: "1", away_score: "1", date: "10/28", week: "10"}
]

roma_games.each do |game|
  Game.create(game)
end

roma_matchups = [
  {game_id: 21, team_id: roma.id},
  {game_id: 22, team_id: roma.id},
  {game_id: 23, team_id: roma.id},
  {game_id: 24, team_id: roma.id},
  {game_id: 25, team_id: roma.id},
  {game_id: 26, team_id: roma.id},
  {game_id: 27, team_id: roma.id},
  {game_id: 28, team_id: roma.id},
  {game_id: 29, team_id: roma.id},
  {game_id: 30, team_id: roma.id}
]

roma_matchups.each do |matchup|
  Matchup.create(matchup)
end

roma_players = [
  {first_name: "Robin", last_name: "Olsen", number: "1", position: "goalie", short_position: "GK", full_position: "Goalie", photo: "https://www.footballdatabase.eu/images/photos/players/a_153/153869.jpg", team: roma},
  {first_name: "Allesandro", last_name: "Florenzi", number: "20", position: "rightback", short_position: "RB", full_position: "Right Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_84/84134.jpg", team: roma},
  {first_name: "Juan", last_name: "Jesus", number: "19", position: "rightcenterback", short_position: "CB", full_position: "Center Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_98/98554.jpg", team: roma},
  {first_name: "Kostas", last_name: "Manolas", number: "3", position: "leftcenterback", short_position: "CB", full_position: "Center Back",photo: "https://www.footballdatabase.eu/images/photos/players/a_61/61690.jpg", team: roma},
  {first_name: "Bryan", last_name: "Cristante", number: "12", position: "leftback", short_position: "LB", full_position: "Left Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_154/154455.jpg", team: roma},
  {first_name: "Daniele", last_name: "De Rossi", number: "14", position: "defensivecentermidfield",short_position: "CDM", full_position: "Center Defensive Mid", photo: "https://www.footballdatabase.eu/images/photos/players/a_1/1539.jpg", team: roma},
  {first_name: "Lorenzo", last_name: "Pelligrini", number: "5", position: "leftcentermidfield", short_position: "CM", full_position: "Center Midfield", photo: "https://www.footballdatabase.eu/images/photos/players/a_208/208858.jpg", team: roma},
  {first_name: "Javier", last_name: "Pastore", number: "10", position: "rightcentermidfield", short_position: "CM", full_position: "Center Midfield", photo: "https://www.footballdatabase.eu/images/photos/players/a_30/30222.jpg", team: roma},
  {first_name: "Justin", last_name: "Kluivert", number: "7", position: "leftforward", short_position: "LW", full_position: "Left Wing", photo: "https://www.footballdatabase.eu/images/photos/players/a_289/289224.jpg", team: roma, nation: "Netherlands"},
  {first_name: "Cengiz", last_name: "Under", number: "16", position: "rightforward", short_position: "RW", full_position: "Right Wing", photo: "https://www.footballdatabase.eu/images/photos/players/a_244/244985.jpg", team: roma},
  {first_name: "Edin", last_name: "Dzeko", number: "17", position: "centerforward", short_position: "CF", full_position: "Striker", photo: "https://www.footballdatabase.eu/images/photos/players/a_20/20112.jpg", team: roma}
]

roma_players.each do |player|
  Player.create(player)
end

milan = Team.find_by(name: "AC_Milan")
milan_players = [
  {first_name: "Gianluigi", last_name: "Donnarumma", number: "1", position: "goalie", short_position: "GK", full_position: "Goalie", photo: "https://www.footballdatabase.eu/images/photos/players/a_255/255127.jpg", team: milan, nation: "Italy", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png"},
  {first_name: "Ignazio", last_name: "Abate", number: "20", position: "rightback", short_position: "RB", full_position: "Right Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_5/5419.jpg", team: milan, nation: "Italy" , badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png"},
  {first_name: "Alessio", last_name: "Romagnoli", number: "13", position: "rightcenterback", short_position: "CB", full_position: "Center Back", photo:"https://www.footballdatabase.eu/images/photos/players/a_178/178485.jpg", team: milan, nation: "Italy", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png" },
  {first_name: "Matteo", last_name: "Mussachio", number: "22", position: "leftcenterback", short_position: "CB", full_position: "Center Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_30/30867.jpg", team: milan, nation: "Argentina", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png" },
  {first_name: "Ricardo", last_name: "Rodriguez", number: "68", position: "leftback", short_position: "LB", full_position: "Left Back", photo: "https://www.footballdatabase.eu/images/photos/players/a_92/92150.jpg", team: milan, nation: "Switzerland", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png" },
  {first_name: "Franck", last_name: "Kessie", number: "79", position: "defensivecentermidfield", short_position: "CDM", full_position: "Center Defensive Midfield", photo: "https://www.footballdatabase.eu/images/photos/players/a_242/242568.jpg", team: milan, nation: "Ivory Coast", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png" },
  {first_name: "Hakan", last_name: "Calhanoglu", number: "10", position: "leftcentermidfield", short_position: "CM", full_position: "Center Midfield", photo: "https://www.footballdatabase.eu/images/photos/players/a_158/158977.jpg", team: milan, nation: "Turkey", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png" },
  {first_name: "Giacomo", last_name: "Bonaventura", number: "5", position: "rightcentermidfield", short_position: "RCM", full_position: "Center Midfield", photo: "https://www.footballdatabase.eu/images/photos/players/a_35/35295.jpg", team: milan, nation: "Italy", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png" },
  {first_name: "Jesus", last_name: "Suso", number: "8", position: "rightforward", short_position: "RW", full_position: "Right Wing", photo: "https://www.footballdatabase.eu/images/photos/players/a_116/116389.jpg", team: milan, nation: "Spain", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png" },
  {first_name: "Samuel", last_name: "Castillejo", number: "7", position: "leftforward", short_position: "LW", full_position: "Left Wing", photo: "https://www.footballdatabase.eu/images/photos/players/a_192/192846.jpg", team: milan, nation: "Spain", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png" },
  {first_name: "Krzysztof", last_name: "Piatek", number: "19", position: "centerforward", short_position: "ST", full_position: "Striker", photo: "https://www.footballdatabase.eu/images/photos/players/a_233/233602.jpg", team: milan, nation: "Poland", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png" }
]
milan_players.each do |player|
  Player.create(player)
end


juventus_wins = [
  {team_id: juventus.id},
  {team_id: juventus.id},
  {team_id: juventus.id},
  {team_id: juventus.id},
  {team_id: juventus.id},
  {team_id: juventus.id},
  {team_id: juventus.id},
  {team_id: juventus.id},
  {team_id: juventus.id},
  {team_id: juventus.id},
  {team_id: juventus.id},
  {team_id: juventus.id},
  {team_id: juventus.id}
]

juventus_draws = [
  {team_id: juventus.id}
]

juventus_points = 0
juventus_wins.each do |win|
  Win.create(win)
  juventus_points += 3
end

juventus_draws.each do |draw|
  Draw.create(draw)
  juventus_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: juventus_points)
end


fiorentina_wins = [
  {team_id: fiorentina.id},
  {team_id: fiorentina.id},
  {team_id: fiorentina.id},
  {team_id: fiorentina.id}
]

fiorentina_draws = [
  {team_id: fiorentina.id},
  {team_id: fiorentina.id},
  {team_id: fiorentina.id},
  {team_id: fiorentina.id},
  {team_id: fiorentina.id},
  {team_id: fiorentina.id}
]

fiorentina_points = 0
fiorentina_wins.each do |win|
  Win.create(win)
  fiorentina_points += 3
end

fiorentina_draws.each do |draw|
  Draw.create(draw)
  fiorentina_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: fiorentina_points)
end

ac_milan = Team.find_by(name: "AC_Milan")

ac_milan_wins = [
  {team_id: ac_milan.id},
  {team_id: ac_milan.id},
  {team_id: ac_milan.id},
  {team_id: ac_milan.id},
  {team_id: ac_milan.id},
  {team_id: ac_milan.id}
]

ac_milan_draws = [
  {team_id: ac_milan.id},
  {team_id: ac_milan.id},
  {team_id: ac_milan.id},
  {team_id: ac_milan.id}
]

ac_milan_points = 0
ac_milan_wins.each do |win|
  Win.create(win)
  ac_milan_points += 3
end

ac_milan_draws.each do |draw|
  Draw.create(draw)
  ac_milan_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: ac_milan_points)
end

inter_milan = Team.find_by(name: "Inter_Milan")

inter_milan_wins = [
  {team_id: inter_milan.id},
  {team_id: inter_milan.id},
  {team_id: inter_milan.id},
  {team_id: inter_milan.id},
  {team_id: inter_milan.id},
  {team_id: inter_milan.id},
  {team_id: inter_milan.id},
  {team_id: inter_milan.id},
  {team_id: inter_milan.id}
]

inter_milan_draws = [
  {team_id: inter_milan.id}
]

inter_milan_points = 0
inter_milan_wins.each do |win|
  Win.create(win)
  inter_milan_points += 3
end

inter_milan_draws.each do |draw|
  Draw.create(draw)
  inter_milan_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: inter_milan_points)
end

roma = Team.find_by(name: "Roma")

roma_wins = [
  {team_id: roma.id},
  {team_id: roma.id},
  {team_id: roma.id},
  {team_id: roma.id},
  {team_id: roma.id}
]

roma_draws = [
  {team_id: roma.id},
  {team_id: roma.id},
  {team_id: roma.id},
  {team_id: roma.id}
]

roma_points = 0
roma_wins.each do |win|
  Win.create(win)
  roma_points += 3
end

roma_draws.each do |draw|
  Draw.create(draw)
  roma_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: roma_points)
end

lazio = Team.find_by(name: "Lazio")

lazio_wins = [
  {team_id: lazio.id},
  {team_id: lazio.id},
  {team_id: lazio.id},
  {team_id: lazio.id},
  {team_id: lazio.id},
  {team_id: lazio.id},
  {team_id: lazio.id}
]

lazio_draws = [
  {team_id: lazio.id},
  {team_id: lazio.id},
  {team_id: lazio.id}
]

lazio_points = -1
lazio_wins.each do |win|
  Win.create(win)
  lazio_points += 3
end

lazio_draws.each do |draw|
  Draw.create(draw)
  lazio_points += 1
  team = Team.find(lazio.id)
  team.update(points: lazio_points)
end

torino = Team.find_by(name: "Torino")

torino_wins = [
  {team_id: torino.id},
  {team_id: torino.id},
  {team_id: torino.id},
  {team_id: torino.id}
]

torino_draws = [
  {team_id: torino.id},
  {team_id: torino.id},
  {team_id: torino.id},
  {team_id: torino.id},
  {team_id: torino.id},
  {team_id: torino.id}
]

torino_points = 0
torino_wins.each do |win|
  Win.create(win)
  torino_points += 3
end

torino_draws.each do |draw|
  Draw.create(draw)
  torino_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: torino_points)
end

atalanta = Team.find_by(name: "Atalanta")

atalanta_wins = [
  {team_id: atalanta.id},
  {team_id: atalanta.id},
  {team_id: atalanta.id},
  {team_id: atalanta.id},
  {team_id: atalanta.id}
]

atalanta_draws = [
  {team_id: atalanta.id},
  {team_id: atalanta.id},
  {team_id: atalanta.id}
]

atalanta_points = 0
atalanta_wins.each do |win|
  Win.create(win)
  atalanta_points += 3
end

atalanta_draws.each do |draw|
  Draw.create(draw)
  atalanta_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: atalanta_points)
end

genoa = Team.find_by(name: "Genoa")

genoa_wins = [
  {team_id: genoa.id},
  {team_id: genoa.id},
  {team_id: genoa.id},
  {team_id: genoa.id}
]

genoa_draws = [
  {team_id: genoa.id},
  {team_id: genoa.id},
  {team_id: genoa.id}
]

genoa_points = 0
genoa_wins.each do |win|
  Win.create(win)
  genoa_points += 3
end

genoa_draws.each do |draw|
  Draw.create(draw)
  genoa_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: genoa_points)
end

sampdoria = Team.find_by(name: "Sampdoria")

sampdoria_wins = [
  {team_id: sampdoria.id},
  {team_id: sampdoria.id},
  {team_id: sampdoria.id},
  {team_id: sampdoria.id},
  {team_id: sampdoria.id}
]

sampdoria_draws = [
  {team_id: sampdoria.id},
  {team_id: sampdoria.id},
  {team_id: sampdoria.id},
  {team_id: sampdoria.id}
]

sampdoria_points = 0
sampdoria_wins.each do |win|
  Win.create(win)
  sampdoria_points += 3
end

sampdoria_draws.each do |draw|
  Draw.create(draw)
  sampdoria_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: sampdoria_points)
end

napoli = Team.find_by(name: "Napoli")

napoli_wins = [
  {team_id: napoli.id},
  {team_id: napoli.id},
  {team_id: napoli.id},
  {team_id: napoli.id},
  {team_id: napoli.id},
  {team_id: napoli.id},
  {team_id: napoli.id},
  {team_id: napoli.id},
  {team_id: napoli.id}
]

napoli_draws = [
  {team_id: napoli.id},
  {team_id: napoli.id},
]

napoli_points = 0
napoli_wins.each do |win|
  Win.create(win)
  napoli_points += 3
end

napoli_draws.each do |draw|
  Draw.create(draw)
  napoli_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: napoli_points)
end

sassuolo = Team.find_by(name: "Sassuolo")

sassuolo_wins = [
  {team_id: sassuolo.id},
  {team_id: sassuolo.id},
  {team_id: sassuolo.id},
  {team_id: sassuolo.id},
  {team_id: sassuolo.id}
]

sassuolo_draws = [
  {team_id: sassuolo.id},
  {team_id: sassuolo.id},
  {team_id: sassuolo.id},
  {team_id: sassuolo.id}
]

sassuolo_points = 0
sassuolo_wins.each do |win|
  Win.create(win)
  sassuolo_points += 3
end

sassuolo_draws.each do |draw|
  Draw.create(draw)
  sassuolo_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: sassuolo_points)
end

cagliari = Team.find_by(name: "Cagliari")

cagliari_wins = [
  {team_id: cagliari.id},
  {team_id: cagliari.id},
  {team_id: cagliari.id}
]

cagliari_draws = [
  {team_id: cagliari.id},
  {team_id: cagliari.id},
  {team_id: cagliari.id},
  {team_id: cagliari.id},
  {team_id: cagliari.id},
  {team_id: cagliari.id}
]

cagliari_points = 0
cagliari_wins.each do |win|
  Win.create(win)
  cagliari_points += 3
end

cagliari_draws.each do |draw|
  Draw.create(draw)
  cagliari_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: cagliari_points)
end

parma = Team.find_by(name: "Parma")

parma_wins = [
  {team_id: parma.id},
  {team_id: parma.id},
  {team_id: parma.id},
  {team_id: parma.id},
  {team_id: parma.id},
  {team_id: parma.id}
]

parma_draws = [
  {team_id: parma.id},
  {team_id: parma.id}
]

parma_points = 0
parma_wins.each do |win|
  Win.create(win)
  parma_points += 3
end

parma_draws.each do |draw|
  Draw.create(draw)
  parma_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: parma_points)
end

spal = Team.find_by(name: "SPAL")

spal_wins = [
  {team_id: spal.id},
  {team_id: spal.id},
  {team_id: spal.id},
  {team_id: spal.id}
]

spal_draws = [
  {team_id: spal.id},
  {team_id: spal.id}
]

spal_points = 0
spal_wins.each do |win|
  Win.create(win)
  spal_points += 3
end

spal_draws.each do |draw|
  Draw.create(draw)
  spal_points += 1
  team = Team.find(spal.id)
  team.update(points: spal_points)
end

udinese = Team.find_by(name: "Udinese")

udinese_wins = [
  {team_id: udinese.id},
  {team_id: udinese.id},
  {team_id: udinese.id}
]

udinese_draws = [
  {team_id: udinese.id},
  {team_id: udinese.id},
  {team_id: udinese.id}
]

udinese_points = 0
udinese_wins.each do |win|
  Win.create(win)
  udinese_points += 3
end

udinese_draws.each do |draw|
  Draw.create(draw)
  udinese_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: udinese_points)
end

bologna = Team.find_by(name: "Bologna")

bologna_wins = [
  {team_id: bologna.id},
  {team_id: bologna.id}
]

bologna_draws = [
  {team_id: bologna.id},
  {team_id: bologna.id},
  {team_id: bologna.id},
  {team_id: bologna.id},
  {team_id: bologna.id}
]

bologna_points = 0
bologna_wins.each do |win|
  Win.create(win)
  bologna_points += 3
end

bologna_draws.each do |draw|
  Draw.create(draw)
  bologna_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: bologna_points)
end

empoli = Team.find_by(name: "Empoli")

empoli_wins = [
  {team_id: empoli.id},
  {team_id: empoli.id},
  {team_id: empoli.id}
]

empoli_draws = [
  {team_id: empoli.id},
  {team_id: empoli.id},
  {team_id: empoli.id},
  {team_id: empoli.id}
]

empoli_points = 0
empoli_wins.each do |win|
  Win.create(win)
  empoli_points += 3
end

empoli_draws.each do |draw|
  Draw.create(draw)
  empoli_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: empoli_points)
end

frosinone = Team.find_by(name: "Frosinone")

frosinone_wins = [
  {team_id: frosinone.id}
]

frosinone_draws = [
  {team_id: frosinone.id},
  {team_id: frosinone.id},
  {team_id: frosinone.id},
  {team_id: frosinone.id}
]

frosinone_points = 0
frosinone_wins.each do |win|
  Win.create(win)
  frosinone_points += 3
end

frosinone_draws.each do |draw|
  Draw.create(draw)
  frosinone_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: frosinone_points)
end

chievo_verona = Team.find_by(name: "ChievoVerona")

chievo_verona_wins = [
]

chievo_verona_draws = [
  {team_id: chievo_verona.id},
  {team_id: chievo_verona.id},
  {team_id: chievo_verona.id},
  {team_id: chievo_verona.id}
]

chievo_verona_points = -3
chievo_verona_wins.each do |win|
  Win.create(win)
  chievo_verona_points += 3
end

chievo_verona_draws.each do |draw|
  Draw.create(draw)
  chievo_verona_points += 1
  team = Team.find(draw[:team_id])
  team.update(points: chievo_verona_points)
end

formations = [
  {formation: "4-4-2"},
  {formation: "4-3-3"},
  {formation: "4-1-2-1-2"},
  {formation: "5-3-2"},
  {formation: "3-5-2"}
]

formations.each do |item|
  Formation.create(item)
end

positions = [
  {name: "first"},
  {name: "second"},
  {name: "third"},
  {name: "fourth"},
  {name: "fifth"},
  {name: "sixth"},
  {name: "seventh"},
  {name: "eigth"},
  {name: "ninth"},
  {name: "tenth"},
  {name: "eleventh"}
]

positions.each do |item|
  Position.create(item)
end
