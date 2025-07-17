/**
 * Generics
 * 
 * Permite criar "componentes" reutilizaveis
 */

function printSomething<T>(x: T): T {
  return x;
}

const str = printSomething<string>("Hello");
const num = printSomething<number>(3);
const bool = printSomething<boolean>(true);

function getRandomKeyValuePair<T>(obj: {[key: string]: T}): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];

  return {
    key: randKey,
    value: obj[randKey]
  };
};

const stringObject: {[key: string]: string} = {a: "apple", b: "banana", c: "cherry"};
const numberObject: {[key: string]: number} = {one: 1, two: 2, three: 3};

console.log(getRandomKeyValuePair<string>(stringObject));
console.log(getRandomKeyValuePair<number>(numberObject));

// Filter array

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter(t => condition(t));
};

const numArray: number[] = [1, 2, 3, 4, 5, 6];
const evenNumArrayResult: number[] = filterArray<number>(numArray, n => n % 2 == 0);
console.log(evenNumArrayResult);

const stringArr: string[] = ["apple", "banana", "pineapple"];
const appleStringArrResult: string[] = filterArray<string>(stringArr, a => a == "apple");
console.log(appleStringArrResult);

interface Fruit {
  name: string,
  color: string
};

const fruitArray: Fruit[] = [
  {name: "Apple", color: "Red"},
  {name: "Banana", color: "Yellow"},
  {name: "Cherry", color: "Red"},
];

const redFruits: Fruit[] = filterArray<Fruit>(fruitArray, fruit => fruit.color == "Red");
console.log({ redFruits });