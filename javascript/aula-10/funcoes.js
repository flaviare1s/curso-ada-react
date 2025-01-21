function saudacao(nome, curso = 'Front-End em React') {
  return `Ola, ${nome}, bem vindo(a) ao curso de ${curso}`;
}

const mesagemSaudacao = saudacao('Walisson', 'Front-End em React 2');

console.log(mesagemSaudacao);

console.clear();


function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(2, 3);

console.log(resultado);
console.log(resultado / 2);

console.clear();

// Funções anônimas:

const dobro = function (numero) {
  return numero * 2;
}

const resultadoDobro = dobro(2);

console.log(resultadoDobro);

console.clear();

// Arrow Functions:

const triplo = (numero) => numero * 3;    

const resultadoTriplo = triplo(2);

console.log(resultadoTriplo);
