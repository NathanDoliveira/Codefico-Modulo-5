// Aqui serão adicionados seus scripts

const noticiaPrincipal = document.getElementById('noticia-principal');
alert(noticiaPrincipal.innerHTML);

const titulosNoticia = document.getElementsByTagName('h1');
for (const titulo of titulosNoticia) {
    titulo.style.color = 'red';
}

const paragrafosNoticia = document.getElementsByClassName('paragrafo-noticia');
for (const paragrafo of paragrafosNoticia) {
    paragrafo.innerHTML = 'Leia a notícia completa';
    paragrafo.style.color = 'blue';
}

const secaoComentario = document.getElementById('secao-comentarios');
const novoComentario = document.createElement('p');
novoComentario.innerHTML = 'Deixe seu comentário';
novoComentario.style.color = 'red';
secaoComentario.appendChild(novoComentario);

const ultimasAtualizacoes = document.getElementById('ultimas-atualizacoes');
const ultimoItem = ultimasAtualizacoes.lastElementChild;
ultimasAtualizacoes.removeChild(ultimoItem);

const alternarTema = document.getElementById('alternar-tema');
alternarTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro');
})