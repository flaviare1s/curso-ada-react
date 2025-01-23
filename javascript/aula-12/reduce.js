const numeros = [1, 2, 3, 4, 5];

const total = numeros.reduce((acumulador, numero, index, array) => {
  return acumulador + numero
}, 0);

console.log(total);

console.clear();

// Exemplo 1: Calcule a média com reduce

const media = numeros.reduce((acumulador, numero, _, array) => {
  return acumulador + numero / array.length
}, 0)

console.log(media);

console.clear();

// Exemplo 2: Some somente os valores pares

const somaPares = numeros.reduce((acc, numero) => {
  if (numero % 2 === 0) {
    return acc + numero
  }
  else {
    return acc
  }
}, 0)

console.log(somaPares)

console.clear();

// Exemplo 3: Retorne o valor total da compra:

const carrinho = [
  { produto: "Feijão", preco: 5, quantidade: 2 },
  { produto: "Arroz", preco: 10, quantidade: 1 },
  { produto: "Macarrao", preco: 8, quantidade: 3 },
];

const valorTotal = carrinho.reduce((acc, item) => {
  return acc + (item.preco * item.quantidade) 
}, 0)

console.log(valorTotal)
