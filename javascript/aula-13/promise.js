const fs = require("fs");

// * 2. Promises

// A promise é um objeto que guarda uma promessa de que algo será realizado.

console.log("Antes da promise...");

function lerArquivoPromise() {
  return (promessa = new Promise((resolve, reject) => {
    fs.readFile("javascript/aula-13/arquivo.txt", (erro, conteudo) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(String(conteudo));
      }
    });
  }));
}

lerArquivoPromise()
  .then((retornoDoResolve) => {
    console.log("Deu certo!", retornoDoResolve);
  })
  .catch((retornoDoReject) => {
    console.log("Deu errado!", retornoDoReject);
  })
  .finally(() => {
    console.log("O finally sempre será executado!");
  });
