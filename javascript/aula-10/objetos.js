// Object literal:

const pessoa = {
  nome: 'Walisson',
  idade: 30,
  endereco: {
    rua: 'Rua A',
    numero: 123,
  },
  funcao: () => {
    console.log('Sou uma pessoa');
  }
}

console.log(pessoa.endereco.rua);

pessoa.profissao = 'Desenvolvedor';

console.log(pessoa);

console.clear();

pessoa.nome = 'Walisson Santos';
console.log(pessoa);

delete pessoa.profissao;

console.clear();

pessoa.funcao();

console.clear();

// ---------------------------------------------------------------

const idade2 = 30;
const altura = 1.75;

const objeto = {
  idade2,
  altura,
}

console.log(objeto);

console.clear();

// Desestruturação:

const { nome, endereco } = pessoa;
console.log(nome);
console.log(endereco);
