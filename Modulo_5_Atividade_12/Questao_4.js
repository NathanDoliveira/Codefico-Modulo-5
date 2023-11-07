const prompt = require('prompt-sync')();

let num = parseInt(prompt('Digite um número inteiro positivo: '));

if (num > 0) {
    switch (num) {
        case 1:
            console.log('Sequência de Fibonacci até', num, ':')
            console.log('0');
            break;
        case 2:
            console.log('Sequência de Fibonacci até', num, ':')
            console.log('0 1');
            break;
        default:
            let first = 0;
            let second = 1;
            let result = '0 1';
            for (let i = 3; i <= num; i++) {
                let third = first + second;
                result +=` ${third}`;
                first = second;
                second = third;
            }
            console.log('Sequência de Fibonacci até', num, ':')
            console.log(result);
            break;
    }
}
else {
    console.log('Nenhum número na sequência');
}