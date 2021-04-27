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
    peso: 11,
    lunghezza: 12,
  },
];

//divido in due array separati in base alla lunghezza delle zucchine

var arrLess = [];
var arrMore = [];

for (el of arrZucchine) {
  if (el["lunghezza"] > 15) {
    arrMore.push(el);
  } else {
    arrLess.push(el);
  }
}

console.log(arrMore);
console.log(arrLess);

//stampo il peso totale dei due gruppi di zucchine

var totalWeightMore = 0;
var totalWeightLess = 0;

for (el of arrMore) {
  totalWeightMore += el["peso"];
}

for (el of arrLess) {
  totalWeightLess += el["peso"];
}

console.log(
  "Peso totale zucchine con lunghezza maggiore a 15 cm: " + totalWeightMore
);
console.log(
  "Peso totale zucchine con lunghezza minore o uguale a 15 cm: " +
    totalWeightLess
);
