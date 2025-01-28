"use strict";
const numeros = [1, 2, 3, 4, 5];
const numeros2 = [1, 2, 3, 4, 5];
//const misto: (number | string)[] = ['Walisson', 31, 1.77]; (Não é indicado usar essa sintaxe!)
// const misto: any[] = ['Walisson', 31, 1.77]; (Não é indicado usar essa sintaxe! Evite utilizar o any!)
const idades = [];
idades.push(20);
idades.push(12);
idades.push(32);
idades.push(15);
idades.push(22);
const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);
// Tupla:
const pessoa = ['Walisson', 30, true];
// No TypeScript, tupla é um tipo de dado que permite representar um array com um número fixo de elementos, onde cada elemento pode ter um tipo específico e predefinido. Isso é útil quando você sabe exatamente quantos valores estarão presentes e quais tipos cada um deles terá.
