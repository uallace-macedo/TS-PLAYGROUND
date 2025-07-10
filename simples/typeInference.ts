/**
 * Type Inference
 * 
 * É uma feature do Typescript que faz com que o compilador
 * tente inferir automaticamente o valor de uma váriavel, por exemplo,
 * a partir do valor atribuído a ela.
 */

let tech = "Typescript";
let favNumber = 8;
let tsHard = true;

console.log(tech, favNumber, tsHard);
console.log(typeof tech, typeof favNumber, typeof tsHard);

// ERRO
// tech = false;
// favNumber = true;
// tsHard = "hello";