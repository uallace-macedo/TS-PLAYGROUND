/**
 * Class Properties Annotations
 * 
 * Pode-se anotar as propriedades de uma classe com um tipo.
 */

class Person2 {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
};

const tPerson = new Person2("John", 20);
console.log(tPerson);