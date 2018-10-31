teams = [
  {name: "Fiorentina", city: "Florence", nickname: "La Viola", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000111.png"},
  {name: "Juventus", city: "Turin", nickname: "I Bianconeri", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000070.png"},
  {name: "AC_Milan", city: "Milan", nickname: "I Rossoneri", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/47.png"},
  {name: "Inter_Milan", city: "Milan", nickname: "I Nerrazzuri", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/44.png"},
  {name: "Roma", city: "Rome", nickname: "I Giallorossi", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000084.png"},
  {name: "Lazio", city: "Rome", nickname: "I Biancocelesti", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/46.png"},
  {name: "Torino", city: "Turin", nickname: "I Granata", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/54.png"},
  {name: "Atalanta", city: "Atalanta", nickname: "I Nerrazzuri", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000181.png"},
  {name: "Genoa", city: "Genoa", nickname: "I Rossoblu", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/110556.png"},
  {name: "Sampdoria", city: "Genoa", nickname: "Blucerchiati", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/1837.png"},
  {name: "Napoli", city: "Naples", nickname: "Gli Azzuri", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000083.png"},
  {name: "Sassuolo", city: "Sassuolo", nickname: "I Neroverdi", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000180.png"},
  {name: "Cagliari", city: "Cagliari", nickname: "I Rossoblu", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000230.png"},
  {name: "Parma", city: "Parma", nickname: "Gialloblu", badge: "https://i.pinimg.com/originals/ac/a7/97/aca7979bdc00add6bb7a1beb2557641c.png"},
  {name: "SPAL", city: "Ferrara", nickname: "I Biancoazzuri", badge: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/4377.png"},
  {name: "Udinese", city: "Udinese", nickname: "Bianconeri Friuliani", badge: "https://futhead.cursecdn.com/static/img/15/clubs_large/55.png"},
  {name: "Bologna", city: "Bologna", nickname: "La Rossa", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000157.png"},
  {name: "Empoli", city: "Empoli", nickname: "Gli Azzuri", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000229.png"},
  {name: "Frosinone", city: "Frosinone", nickname: "Giallazzuri", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000382.png"},
  {name: "ChievoVerona", city: "Verona", nickname: "I Gialloblu", badge: "https://futhead.cursecdn.com/static/img/17/items/badges/6000158.png"}
]

teams.each do |team|
  Team.create (team)
end
fiorentina = Team.find_by(name: "Fiorentina")
fiorentina_players = [
  {first_name: "Alban", last_name: "Lafont", number: "1", position: "goalie", photo: "https://tmssl.akamaized.net/images/portrait/originals/357117-1511780815.jpg", team: fiorentina},
  {first_name: "Nikola", last_name: "Milenkovic", number: "4", position: "rightback", photo: "https://www.mykhel.com/thumb/190x100x190/football/players/4/227444.1528975675.jpg", team: fiorentina },
  {first_name: "German", last_name: "Pezella", number: "20", position: "rightcenterback", photo: "https://www.google.com/imgres?imgurl=https://tmssl.akamaized.net/images/portrait/originals/113133-1447257122.jpg&imgrefurl=https://www.transfermarkt.com/german-pezzella/profil/spieler/113133&h=1242&w=955&tbnid=_lt9hZxkY4J9OM:&q=german+pezzella&tbnh=186&tbnw=143&usg=AI4_-kRocQbIF9skfykEjxkUuikpJ1U_4w&vet=12ahUKEwj_kq64oLHeAhWSdN8KHbQkAr4Q_B0wE3oECAUQBg..i&docid=IRmK3HWqbeSyiM&itg=1&sa=X&ved=2ahUKEwj_kq64oLHeAhWSdN8KHbQkAr4Q_B0wE3oECAUQBg", team: fiorentina },
  {first_name: "Vitor", last_name: "Hugo", number: "31", position: "leftcenterback", photo: "https://www.repstatic.it/content/nazionale/img/2017/07/13/203607965-b450505f-f97b-4d15-9e71-584cb96cdf1f.jpg", team: fiorentina },
  {first_name: "Christiano", last_name: "Biraghi", number: "3", position: "leftback", photo: "https://www.inter-news.it/files/2018/01/Cristiano-Biraghi-Fiorentina.jpg", team: fiorentina },
  {first_name: "Marco", last_name: "Benassi", number: "24", position: "rightcentermidfield", photo: "http://www.squawka.com/en/wp-content/uploads/2017/10/GettyImages-839993516.jpg", team: fiorentina },
  {first_name: "Gerson", last_name: "Santos da Silva", number: "8", position: "leftcentermidfield", photo: "https://www.blitzquotidiano.it/wp/wp-content/uploads/2018/08/fiorentina_chievo_6_1-highlights_pagelle-300x272.jpg", team: fiorentina },
  {first_name: "Jordan", last_name: "Veretout", number: "17", position: "defensivecentermidfield", photo: "https://cdn.vox-cdn.com/thumbor/Zi2jtOtrbInQQIzdXiIIojjBrgc=/0x0:3000x1998/1200x800/filters:focal(1221x276:1701x756)/cdn.vox-cdn.com/uploads/chorus_image/image/59938149/948234892.jpg.0.jpg", team: fiorentina },
  {first_name: "Federico", last_name: "Chiesa", number: "25", position: "rightforward", photo: "http://www.violanews.com/wp-content/uploads/sites/21/2018/04/senza-categoria/federico-chiesa-2.jpg", team: fiorentina },
  {first_name: "Marko", last_name: "Pjaca", number: "10", position: "leftforward", photo: "https://media.gettyimages.com/photos/marko-pjaca-of-acf-fiorentina-in-action-during-the-serie-a-match-acf-picture-id1024185324", team: fiorentina },
  {first_name: "Giovanni", last_name: "Simeone", number: "9", position: "centerforward", photo: "https://sempreinter.com/wp-content/uploads/2018/01/simeone-e1515016434190.jpg", team: fiorentina }
]
fiorentina_players.each do |player|
  Player.create(player)
end

juventus = Team.find_by(name: "Juventus")
juventus_players = [
  {first_name: "Wojciech", last_name: "Szczesny", number: "1", position: "goalie", photo: "https://pbs.twimg.com/profile_images/891114812796796928/PVjctqFC.jpg", team: juventus},
  {first_name: "Joao", last_name: "Cancelo", number: "20", position: "rightback", photo: "https://b.fssta.com/uploads/application/soccer/players/649337.vresize.350.425.medium.73.png", team: juventus},
  {first_name: "Leonardo", last_name: "Bonucci", number: "19", position: "rightcenterback", photo: "http://www4.pictures.zimbio.com/gi/Leonardo+Bonucci+Juventus+FC+v+AC+Milan+Serie+jiq1utkVIk_l.jpg", team: juventus},
  {first_name: "Giorgio", last_name: "Chiellini", number: "3", position: "leftcenterback", photo: "https://cdn.images.dailystar.co.uk/dynamic/58/photos/242000/620x/Giorgio-Chiellini-649385.jpg", team: juventus},
  {first_name: "Alex", last_name: "Sandro", number: "12", position: "leftback", photo: "https://images.performgroup.com/di/library/GOAL/46/84/alex-sandro-juventus_ljtik0hfcmgm16evpyhrbz94v.jpg", team: juventus},
  {first_name: "Blaise", last_name: "Matuidi", number: "14", position: "defensivecentermidfield", photo: "https://www.africatopsports.com/wp-content/uploads/2017/11/matuidi-juventus-710x509.jpg", team: juventus},
  {first_name: "Miralem", last_name: "Pjanic", number: "5", position: "leftcentermidfield", photo: "http://cdn.24.co.za/files/Cms/General/d/7830/f188732bdce34745bdf33b50c5e6b65e.png", team: juventus},
  {first_name: "Paulo", last_name: "Dybala", number: "10", position: "rightcentermidfield", photo: "https://pbs.twimg.com/media/DZpXs0QX4AAiqQi.jpg", team: juventus},
  {first_name: "Christiano", last_name: "Ronaldo", number: "7", position: "leftforward", photo: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/09/27/736651-cristiano-ronaldo-reuters.jpg", team: juventus},
  {first_name: "Juan", last_name: "Cuadrado", number: "16", position: "rightforward", photo: "https://peoplespostmedia.com/media/k2/items/cache/e6016113b58321823ef4c9ba6bd5a33c_XL.jpg", team: juventus},
  {first_name: "Mario", last_name: "Mandzukic", number: "17", position: "centerforward", photo: "https://images.performgroup.com/di/library/GOAL/7c/d5/mario-mandzukic-juventus-2018-19_54pwb6x4j00o1epgxdjs8pt9i.jpg?t=-1757177315&quality=90&w=1280", team: juventus}
]
juventus_players.each do |player|
  Player.create(player)
end
