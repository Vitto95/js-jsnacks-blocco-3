var yourArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrCutted = getCuttedArray(yourArr);
console.log("Array tagliato: " + arrCutted);

function getCuttedArray(arr) {
  var b = getRandomArbitrary(1, arr.length); //Estremo superiore
  console.log("Estremo superiore: " + b);
  var a = getRandomArbitrary(0, b); //Estremo inferiore
  console.log("Estremo inferiore: " + a);
  return arr.slice(a, b);
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

