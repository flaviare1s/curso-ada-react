let numero = 20; // Inferência de tipo (implicit type)

const pi = 3.1415; // A constante não pode ser alterada

let nome = 'Walisson';

let correta = true;
// let correta: boolean;

let resultado = numero * pi; // O TypeScript infere que resultado é do tipo number

const nomeUsuario = prompt('Informe seu nome: ');
console.log(nomeUsuario?.toLowerCase()); // Nome do usuário pode ser string ou nulo

