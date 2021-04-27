var characters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
var charactersLength = characters.length;
console.log(charactersLength);
var basketballTeam = [
  {
    "Nome Giocatore": "giocatore1",
  },
  {
    "Nome Giocatore": "giocatore2",
  },
  {
    "Nome Giocatore": "giocatore3",
  },
  {
    "Nome Giocatore": "giocatore4",
  },
  {
    "Nome Giocatore": "giocatore5",
  },
];
var limit = 3;

//genero codice giocatore casuale
function getRandomCode(chars, length) {
  var playerCode = "";
  for (var i = 0; i < limit; i++) {
    playerCode += chars.charAt(Math.floor(Math.random() * length + 1));
  }
  for (var j = 0; j < limit; j++) {
    playerCode += Math.floor(Math.random() * 10);
  }
  return playerCode;
}

for (var player of basketballTeam) {
  player.code = getRandomCode(characters, charactersLength);
  player.avgPt = Math.floor(Math.random() * 51);
  player.threePointsPerc = Math.floor(Math.random() * 101) + "%";
}

console.log(basketballTeam);

//DA CORREGGERE
