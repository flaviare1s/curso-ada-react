const prompt = require('readline-sync');

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Limpando o console...
console.clear();

// EXEMPLO 1 - Leia cinco números e mostre o maior deles.

// let maior = 0;
// let numeroInformado;

// for (let i = 0; i < 5; i++) {
//   let numeroInformado = Number(prompt.question('Informe um numero: '));
//   if (numeroInformado > maior) {
//     maior = numeroInformado;
//   }
// }

// console.log(`O maior numero informado foi: ${maior}`);

// --------------------------------------------------------------

// EXEMPLO 2 - Percorrendo strings com for.

const nome = 'Walisson';

console.log(nome.length);

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
