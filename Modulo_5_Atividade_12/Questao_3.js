const prompt = require('prompt-sync')();

let imprimir = prompt('Informe se deseja imprimir um retângulo (s/n): ');

if (imprimir == 'n') {
    console.log('Programa encerrado.');
}

while (imprimir == 's') {
    let a = parseInt(prompt('Informe a altura do retângulo: '));
    let l = parseInt(prompt('Informe a largura do retângulo: '));

    if (l > a && a != 0 && l != 0) {
        for (let i = a; i >= 1; i--) {
            console.log('*'.repeat(l));
        }

        let imprimir = prompt('\nInforme se deseja imprimir um retângulo (s/n): ');
        if (imprimir == 'n') {
            console.log('Programa encerrado.');
            break;
        }
    }

    else {
        console.log('Entrada inválida. \n');
    }
}