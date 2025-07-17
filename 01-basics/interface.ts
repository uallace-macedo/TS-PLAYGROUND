/**
 * Interface
 * 
 * Uma forma de definir a forma de um objeto, especificando propriedades e seus respectivos tipos.
 * Não é limitado a objetos.
 */

interface PersonInterface {
  firstName: string;
  lastName: string;
  age: number;
};

const examplePerson: PersonInterface = {
  firstName: "John",
  lastName: "Santos",
  age: 20
};

interface MathOperation {
  (x: number, y: number): number;
};

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3));
console.log(subtract(7, 2));

// INTERFACE FOR CLASS
interface Vehicle {
  start(): void;
  stop(): void;
};

class Car implements Vehicle {
  start(): void {
    console.log("Car started!");
  };

  stop(): void {
    console.log("Car stopped!");
  };
};

const myCar = new Car();
myCar.start();
myCar.stop();
