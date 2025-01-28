"use strict";
// Object Types:
const individuo = {
    nome: 'Walisson',
    idade: 30,
    endereco: {
        rua: 'Rua A',
        numero: 123,
    },
};
const individuo2 = {
    nome: 'Ana',
    idade: 25,
};
individuo2.endereco = {
    rua: 'Rua B',
    numero: 456,
};
console.log(individuo2);
