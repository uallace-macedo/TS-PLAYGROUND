/**
 * Any Type
 * 
 * É um tipo especial do Typescript que pode ser utilizado para
 * definir qualquer tipo.
 * 
 * O Typescript desabilita todas as checagens de tipo para a
 * variável e suas propriedades.
 * 
 * Mesmo podendo ser útil em algumas situações, seu uso não é
 * muito recomendado, pois dessa forma, o Typescript pode acabar
 * perdendo sua utilidade, e pode-se terminar com um código não-tipado
 * tornando mais difícil a coleta de erros.
 */

let color: any = "crimson";
color = 20;
color = true;
console.log(color);