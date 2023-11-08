const livro = {
    titulo: 'Aventuras de Alice no País das Maravilhas',
    autor: 'Lewis Carroll',
    anoPublicacao: 1865,
    genero: 'Fantasia',
    disponivel: true,
    emprestarLivro: function() {
        this.disponivel = false;
    }
};

console.log('Informações do livro:');
console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
console.log(`Genero: ${livro.genero}`);
console.log(`Disponível para Empréstimo: ${livro.disponivel}`);


livro.emprestarLivro();
console.log(`\nDisponível para Empréstimo (após empréstimo): ${livro.disponivel}`);