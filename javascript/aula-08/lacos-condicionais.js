const prompt = require('readline-sync');

// EXEMPLO 1:

// let saldo = Number(prompt.questionFloat('Qual o seu saldo? '));

// while (saldo < 0) {
//   saldo = Number(prompt.question('Saldo negativo! Por favor, informe um valor positivo! '));
// }

// console.log(`O seu saldo atualizado eh: ${saldo}`);

// --------------------------------------------------------------

// EXEMPLO 2:

// let notaAluno = Number(prompt.question('Informe a nota do aluno? '));

// let soma = 0; //Acumulador
// let qtdNotasValidas = 0; //Contador

// while (notaAluno >= 0 && notaAluno <= 10) {
//   soma += notaAluno;
//   qtdNotasValidas++;
//   notaAluno = Number(prompt.question('Informe a próxima nota! '));
// }

// console.log(`A media das notas eh: ${soma / qtdNotasValidas}`);

// --------------------------------------------------------------

// EXEMPLO 3:

//Math.random() = gera um numero aleatório entre 0 e 1

const numeroAleatorio = parseInt(Math.random() * 10);

let numeroUsuario = Number(prompt.question('Informe um numero de 0 a 10: '));

while (numeroUsuario !== numeroAleatorio) {
  console.log('Você errou! Tente novamente!');

  numeroUsuario = Number(prompt.question('Tente novamente: '));
}

console.log(`Parabéns, vocé acertou! O numero era ${numeroAleatorio}`);
