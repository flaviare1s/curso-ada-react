// Every:

const numeros = [1, 2, 3, 4, 5];

const todosMenoresQueDez = numeros.every((numero) => numero < 10);

console.log(todosMenoresQueDez);

// Some:

const algumMaiorQueDez = numeros.some((numero) => numero > 10);

console.log(algumMaiorQueDez);
