// Funções de Alta Ordem com Arrays:

// ForEach:

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero, index, array) => {
  console.log(index, numero * 10, array);
});

console.clear();

// Find:

const pessoas = [
  { nome: 'Walisson', idade: 30 },
  { nome: 'Ana', idade: 25 },
  { nome: 'Jorge', idade: 35 },
];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade === 25);

console.log(pessoaEncontrada);

// FindIndex:

const indiceDaPessoaEncontrada = pessoas.findIndex((pessoa) => pessoa.idade === 25);

console.log(indiceDaPessoaEncontrada);
