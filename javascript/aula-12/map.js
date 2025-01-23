const numeros = [1, 2, 3, 4, 5];

// Map retorna um novo array com o mesmo tamnho do array original, composto pelos elementos retornados a cada iteração

const novoArray = numeros.map((numeros, index, array) => {
  return numeros ** 2;
})

console.log(novoArray);

console.clear();

// Exemplo: Adicionando uma propriedade aos objetos do array:

const carrinho = [
  { produto: "Feijão", preco: 5, quantidade: 2 },
  { produto: "Arroz", preco: 10, quantidade: 1 },
  { produto: "Macarrao", preco: 8, quantidade: 3 }
];

const novoCarrinho = carrinho.map((item) => {
  return {
    ...item,
    total: item.preco * item.quantidade
  }
});

console.log(novoCarrinho);


// Spread Operator:

const pessoa = {
  nome: 'Walisson',
  idade: 30,
  endereco: {
    rua: 'Rua A',
    numero: 123,
  },
}

pessoa.peso = 79;

console.log(pessoa);

const pessoaComPeso = {
  ...pessoa,
  peso: 79,
};

console.log(pessoaComPeso);
