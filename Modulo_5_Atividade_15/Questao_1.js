const pessoa = {};

pessoa.nome = 'Nathan Alves';
pessoa.idade = '23';

console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);


pessoa.idade = '17';
console.log(`Idade Atualizada: ${pessoa.idade}`)


const pessoa2 = {
    Nome: 'Garibaldo',
    Idade: 75,
};


for (let propriedade in pessoa2) {
    console.log(`${propriedade}: ${pessoa2[propriedade]}`);
}


pessoa2.apresentacao = function() {
    console.log(`Olá, meu nome é ${this.Nome}.`)
}
pessoa2.apresentacao();

pessoa.email = 'garibaldo@gmail.com';
console.log(`Email: ${pessoa.email}`);