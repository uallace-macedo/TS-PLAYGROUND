/**
 * Union Types
 * 
 * Usados para declarar um tipo que pode ter uma de diversas possibilidades
 * definidas.
 */

let myVar: number | string;
function foo(param: string | string[]) {};

myVar = 3;
myVar = "3";

foo("abc");
foo(["abc", "def", "ghi"]);