/**
 * Type
 * 
 * Forma de criar o novo nome para um tipo já existente
 * Permite criar tipos customizados que se referem a outro tipo
 * e trás mais significado/descrição.
*/

type PersonType = {
  name: string;
  age: number;
};

function printPerson(person: PersonType): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
};

const p1: PersonType = {
  name: "John",
  age: 20
};

printPerson(p1);