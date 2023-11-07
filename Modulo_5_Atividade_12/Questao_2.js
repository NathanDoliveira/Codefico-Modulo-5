const prompt = require('prompt-sync')();

let num = 1;
let soma = 0;
let cont = 0;

while (num != 0) {
    let num = parseInt(prompt('Digite um número (0 para sair): '));
    if (num == 0) {
        break
    }
    soma += num;
    cont += 1;
}

console.log(soma/cont);