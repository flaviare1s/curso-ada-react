// High Order Functions:

// Caso 1 - Funções que retornam outras funções:

function welcome(couseName) {
  return (studentName) => {
    console.log(`Olá, ${studentName}! Bem-vindo ao curso de ${couseName}`);
  };
}

const displayWelcomeToCourse = welcome('Front-End em React');
const displayWelcomeToCourse2 = welcome("Back-End em Node");

displayWelcomeToCourse('Walisson');
displayWelcomeToCourse2("Ana");

welcome('Front-End em React')('Walisson');

console.clear();

// Caso 2 - Funções que recebem outras funções como parâmetro:

const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

const calcular = (n1, n2, funcao) => funcao(n1, n2);

console.log(calcular(2, 3, somar));
console.log(calcular(2, 3, subtrair));
console.log(calcular(2, 3, multiplicar));
console.log(calcular(2, 3, dividir));

console.clear();

// Exercício: O cálculo que eu quero é: (n1 * n2) + (2 * n1 * n2)

console.log(calcular(10, 5, (n1, n2) => n1 * n2 + 2 * n1 * n2));
