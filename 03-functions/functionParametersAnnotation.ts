/**
 * Function Parameter Annotations
 * 
 * São usadas para definir os tipos dos parâmetros da função
 */

// Regular Func
function addOne(num: number) {
  return num + 1;
};

let res: number = addOne(3);
console.log(res);

// Arrow Func
const double = (x: number, y: number) => x * y;
res = double(2, 10);
console.log(res);