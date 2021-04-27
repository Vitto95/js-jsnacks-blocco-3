var yourArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrCutted = getCuttedArray(yourArr);
console.log(arrCutted);

function getCuttedArray(arr) {
  var b = getRandomArbitrary(1, arr.length);
  console.log(b);
  var a = getRandomArbitrary(0, b);
  console.log(a);
  return arr.slice(a, b + 1);
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
