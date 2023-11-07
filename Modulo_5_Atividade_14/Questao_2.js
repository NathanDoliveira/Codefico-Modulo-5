let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];

function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

let numerosPrimos = numeros.filter(ehPrimo);
console.log('Array com números primos do array original:');
console.log(numerosPrimos)

let quadradosDosPrimos = numerosPrimos.map(numero => numero ** 2);
console.log('\nArray quadrado dos números primos');
console.log(quadradosDosPrimos);