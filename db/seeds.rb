fiorentina_players = [
  {first_name: "Alban", last_name: "Lafont", number: "1", position: "goalie", photo: "https://static.fctables.com/upload/jy/jymlj57c6a3a9d2f84/alban-lafont.jpg"},
  {first_name: "Nikola", last_name: "Milenkovic", number: "4", position: "rightback", photo: "https://www.mykhel.com/thumb/190x100x190/football/players/4/227444.1528975675.jpg" },
  {first_name: "German", last_name: "Pezella", number: "20", position: "rightcenterback", photo: "http://newhairstylez.com/wp-content/uploads/2018/02/German-Pezzella.jpg" },
  {first_name: "Vitor", last_name: "Hugo", number: "31", position: "leftcenterback", photo: "https://www.repstatic.it/content/nazionale/img/2017/07/13/203607965-b450505f-f97b-4d15-9e71-584cb96cdf1f.jpg" },
  {first_name: "Christiano", last_name: "Biraghi", number: "3", position: "leftback", photo: "https://www.inter-news.it/files/2018/01/Cristiano-Biraghi-Fiorentina.jpg" },
  {first_name: "Marco", last_name: "Benassi", number: "24", position: "rightcentermidfield", photo: "http://www.squawka.com/en/wp-content/uploads/2017/10/GettyImages-839993516.jpg" },
  {first_name: "Gerson", last_name: "Santos da Silva", number: "8", position: "leftcentermidfield", photo: "https://www.blitzquotidiano.it/wp/wp-content/uploads/2018/08/fiorentina_chievo_6_1-highlights_pagelle-300x272.jpg" },
  {first_name: "Jordan", last_name: "Veretout", number: "17", position: "defensivecentermidfield", photo: "https://cdn.vox-cdn.com/thumbor/Zi2jtOtrbInQQIzdXiIIojjBrgc=/0x0:3000x1998/1200x800/filters:focal(1221x276:1701x756)/cdn.vox-cdn.com/uploads/chorus_image/image/59938149/948234892.jpg.0.jpg" },
  {first_name: "Federico", last_name: "Chiesa", number: "25", position: "rightforward", photo: "http://www.violanews.com/wp-content/uploads/sites/21/2018/04/senza-categoria/federico-chiesa-2.jpg" },
  {first_name: "Marko", last_name: "Pjaca", number: "10", position: "leftforward", photo: "https://media.gettyimages.com/photos/marko-pjaca-of-acf-fiorentina-in-action-during-the-serie-a-match-acf-picture-id1024185324" },
  {first_name: "Giovanni", last_name: "Simeone", number: "9", position: "centerforward", photo: "https://sempreinter.com/wp-content/uploads/2018/01/simeone-e1515016434190.jpg" }
]
fiorentina_players.each do |player|
Player.create(player)
end
