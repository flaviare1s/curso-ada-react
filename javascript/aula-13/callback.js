const fs = require('fs');

// * 1. Callbacks

// Essa é uma função assíncrona, pois ler arquivos demora um tempo.

console.log('Antes de ler o arquivo...');

fs.readFile('javascript/aula-13/arquivo.txt', (erro, conteudo) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log(String(conteudo));
  }
});

console.log('Depois de ler o arquivo...');

console.clear();

// Set Timeout

setTimeout(() => {
  console.log('Depois de 2 segundos...');
}, 2000)
