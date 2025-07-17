/**
 * Tuples
 * 
 * Tipo que representa um array com um número fixo de elementos.
 */

let myTuple: [string, number] = ["hello", 20];
console.log(myTuple[0]);
console.log(myTuple[1]);

// DESESTRUCTURING
let [first, second] = myTuple;
console.log(first);
console.log(second);
