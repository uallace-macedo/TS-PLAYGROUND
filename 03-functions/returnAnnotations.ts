// Regular Function
function double1(x: number): number {
  return x*x;
};

let res2: number = double1(2);
console.log(res2);

// Arrow Function
const doubleAF = (x: number): number => x * x;

res2 = doubleAF(3);
console.log(res2);