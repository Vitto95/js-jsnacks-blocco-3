var arrZucchine = [
  {
    varietà: "zucchina1",
    peso: 1,
    lunghezza: 8,
  },
  {
    varietà: "zucchina2",
    peso: 3,
    lunghezza: 20,
  },
  {
    varietà: "zucchina3",
    peso: 2,
    lunghezza: 13,
  },
  {
    varietà: "zucchina4",
    peso: 4,
    lunghezza: 16,
  },
  {
    varietà: "zucchina5",
    peso: 5,
    lunghezza: 12,
  },
  {
    varietà: "zucchina6",
    peso: 12,
    lunghezza: 11,
  },
  {
    varietà: "zucchina7",
    peso: 8,
    lunghezza: 17,
  },
  {
    varietà: "zucchina8",
    peso: 19,
    lunghezza: 15,
  },
  {
    varietà: "zucchina9",
    peso: 13,
    lunghezza: 13,
  },
  {
    varietà: "zucchina10",
    peso: 10,
    lunghezza: 12,
  },
];

var totalWeight = 0;

//Calcolare il peso di tutte le zucchine

for (el of arrZucchine) {
  totalWeight += el["peso"];
}

console.log("Peso totale zucchine: " + totalWeight);
