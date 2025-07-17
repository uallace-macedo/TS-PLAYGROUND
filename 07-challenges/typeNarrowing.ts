/**
 * Type Narrowing
 * 
 * Processo de redefinir o tipo de uma variável dentro de um bloco condicional.
 * Isso permite escrever um código mais preciso e type-safe.
 */

/**
 * Type guards
 * 
 * Ajudam a entender e afunilar as possibilidades de tipos mais
 * precisamente
 * 
 * typeof
 * instanceof
 */

type MyType = string | number;
function exampleFunction(value: MyType): void {
  if(typeof value === "string") {
    // nesse bloco, o ts sabe que o "value" é uma string
    console.log(value.toUpperCase());
  };

  if(typeof value === "number") {
    // nesse bloco, o ts sabe que o "value" é um número
    console.log(value.toFixed(2));
  };
};

exampleFunction("hello");
exampleFunction(42);