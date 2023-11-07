const prompt = require('prompt-sync')();

let entrada = prompt('Digite uma palavra: ');

let tam = entrada.length;
let string_invertida = '';
for (let i = tam - 1; i >= 0; i--) {
    string_invertida += entrada[i];
}

console.log('Texto invertido:', string_invertida);