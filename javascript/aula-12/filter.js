const numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter((numeros, index, array) => {
  return numeros % 2 === 0;
});

console.log(pares);

console.clear();

// Exemplo 1: Crie um código que obtenha apenas os dados dos alunos que têm uma média superior a 85 e imprima od dados deles na tela:

const alunos = [
  { nome: 'Walisson', media: 90 },
  { nome: 'Ana', media: 80 },
  { nome: 'Jorge', media: 70 },
  { nome: 'Joaquim', media: 60 },
  { nome: 'Pedro', media: 50 }
];

const alunosMediaAlta = alunos.filter((aluno) => aluno.media > 85)

console.log(alunosMediaAlta)

console.clear();

// Exemplo 2: Liste os produtos que custam menos de 10 reais e não são bebida:

const produtos = [
  { nome: 'Coca', preco: 5, categoria: 'Bebida' },
  { nome: 'Feijao', preco: 10, categoria: 'Alimento' },
  { nome: 'Arroz', preco: 5, categoria: 'Alimento' },
  { nome: 'Suco', preco: 3, categoria: 'Bebida' },
  { nome: 'Biscoito', preco: 3, categoria: 'Alimento' }
];

const arrayFiltrado = produtos.filter((produto) => produto.preco < 10 && produto.categoria != 'Bebida');

console.log(arrayFiltrado);
