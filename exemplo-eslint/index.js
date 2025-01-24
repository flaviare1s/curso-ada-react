// Lendo um arquivo JSON:

const fs = require('fs');

fs.readFile('.eslintrc.json', (erro, dados) => {
  if (erro) {
    console.log(erro);
  } else {
    const dadosObjeto =JSON.parse(String(dados)); // Conversão de JSON para Objeto
    console.log(dadosObjeto.rules);
  }
});

// Convertendo JSON em formato de string para Objeto:

const jsonString = '{"nome": "Walisson", "idade": 30}';
const objetoJson = JSON.parse(jsonString);

console.log(objetoJson);

// Convertendo um Objeto para JSON:

const objeto = {
  nome: 'Walisson',
  idade: 30,
  profissao: 'Desenvolvedor'
};

const json = JSON.stringify(objeto);

console.log(json);
