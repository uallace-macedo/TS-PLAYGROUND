/**
 * Never
 * 
 * Utilizado para indicar que uma função não retornará nada
 * ou que uma variável não poderá nunca ter um valor.
 * 
 * É útil para indicar que certos caminhos no código, não devem
 * ser alcançados, ou que certos valores são impossiveis.
 */

// Função que sempre retornar um erro
function throwError(msg: string): never {
  throw new Error(msg);
}

// Função que tem loop infinito
function infiniteLoop(): never {
  while (true) {};
}

// Variável que não pode ter um valor
let x: never;
function neverReturns(): never {
  while (true) {};
}

// ERRO: Compile-time error, pois a função nunca retorna
// x = neverReturns();