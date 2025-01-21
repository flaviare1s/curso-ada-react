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

console.clear();

// ---------------------------------------------------------------

// ARRAYS

const pessoa = ['Walisson', 30, 'Masculino', 'Solteiro'];
console.log(pessoa[0]);

pessoa[3] = 'Casado';

console.log(pessoa[3]);

console.log(pessoa.length);

console.clear();

// Slice

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros.slice(0, 3));
console.log(numeros.slice(3));

// Push (adiciona elementos no final do array)

numeros.push(11);
console.log(numeros);

// Unshift (adiciona elementos no inicio do array)

numeros.unshift(0);
console.log(numeros);

// Pop (remove o ultimo elemento do array)

numeros.pop();
console.log(numeros);

// Shift (remove o primeiro elemento do array)

numeros.shift();
console.log(numeros);

console.clear();

// Includes

console.log(numeros.includes(3));

console.clear();

// IndexOf

console.log(numeros.indexOf(3));

console.clear();

// LastIndexOf

console.log(numeros.lastIndexOf(3));

numeros.push(3);
console.log(numeros.lastIndexOf(3));

console.clear();

// ---------------------------------------------------------------

// Percorrendo arrays com for

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  console.log(i, array[i]);
}

console.clear();

// ---------------------------------------------------------------

// For Of (percorre os elementos do array)

for (const item of array) {
  console.log(item);
}

// For In (percorre os índices do array)

for (const index in array) {
  console.log(index);
}