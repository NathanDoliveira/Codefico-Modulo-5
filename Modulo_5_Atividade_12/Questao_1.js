const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));
let resultado = 0;

for (let i = num1; i >= 1; i--) {
    resultado += num2;
}

console.log(resultado);

