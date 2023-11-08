// 1. O que são objetos em JavaScript?
'São variáveis que podêm conter atributos ou métodos.'

// 2. O que são atributos em JavaScript?
'São propriedades de objetos que podem conter dados ou métodos.'

// 3. O que são métodos de classe em JavaScript?
'Uma variável que armazena uma função.'

// 4. O que é uma classe em JavaScript?
'É um modelo para a criação de objetos, permitindo inicializar objetos e criar métodos para manipular esses objetos.'

// 5. O que é o construtor de uma classe em JavaScript?
'É uma função que é responsável pela construção de objetos.'

// 6. Explique o conceito de herança de classes em JavaScript. De um exemplo de uma herança em JavaScript.
'É o reaproveitamento do que foi realizado em uma classe em uma nova classe.'

class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
}