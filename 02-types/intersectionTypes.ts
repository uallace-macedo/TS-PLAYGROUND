/**
 * Intersection Types
 * 
 * Uma forma de combinar múltiplos tipos em um único tipo que inclue todas
 * as propriedades e métodos de cada tipo que o constitue.
 */

type Person1 = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  title: string;
};

type PersonAndEmployee = Person1 & Employee;

const alice: PersonAndEmployee = {
  name: "Alice",
  age: 30,
  id: 123,
  title: "Manager"
};