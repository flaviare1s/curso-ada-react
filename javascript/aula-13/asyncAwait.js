const fs = require("fs");

// 3 * Async Await:

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


async function leituraDeDados() {
  try {
    console.log("Antes da promise ser resolvida...");

  const retornoDaPromise = await lerArquivoPromise(); // O AWAIT espera a promise ser resolvida para avançar

  console.log(retornoDaPromise);

  console.log("Depois da promise ser resolvida...");
  } catch (erro) {
    console.log(erro);
    console.log("Depois da promise ser rejeitada...");
  } finally {
    console.log("O finally sempre sera executado!");
  }
}

leituraDeDados();
