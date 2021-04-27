//dichiarazione variabili

var arrOne = [1, 2, 3, 4, 5];
var arrTwo = ["a", "b", "c", "d", "e"];
var arrThree = []; //è l'array che prenderà gli elementi dei due precedenti array.

arrThree = mixedArr(arrOne, arrTwo, arrThree);
console.log(arrThree);

//Blocco funzioni

function mixedArr(arr1, arr2, arr3) {
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      arr3.push(arr1[i]);
      arr3.push(arr2[i]);
    }
  } else {
    alert("ATTENZIONE! I due array hanno lunghezze diverse.");
  }

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  return arr3;
}
