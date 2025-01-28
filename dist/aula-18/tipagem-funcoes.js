"use strict";
// Union Type, Literal Type e Type Aliases
function chooseNumber(num1, num2, criterio) {
    switch (criterio) {
        case 'maior':
            return num1 > num2 ? num1 : num2;
        case 'menor':
            return num1 < num2 ? num1 : num2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio < 0.5) {
                return num1;
            }
            else {
                return num2;
            }
            ;
    }
}
const numeroEscolhido = chooseNumber(10, 20, 'menor');
console.log("O numero escolhido foi: ", numeroEscolhido);
