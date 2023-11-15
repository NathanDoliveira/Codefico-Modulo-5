document.getElementById('btnClick').onclick = function() {
    alert('Botão Clicado!');
}

document.getElementById('inputText').onchange = function() {
    this.style.color = 'red';
}

document.getElementById('inputText').oninput = function() {
    this.style.color = 'green';
}

document.getElementById('inputText').onkeydown = function() {
    document.getElementById('outputMessage').innerText = 'Teclado Pressionado';
}

document.getElementById('inputText').onkeypress = function() {
    document.getElementById('outputMessage').innerText = 'Teclado sendo Pressionada';
}

document.getElementById('inputText').onkeyup = function() {
    document.getElementById('outputMessage').innerText = 'Teclado liberada';
}

document.getElementById('box').onmouseover = function() {
    this.style.background = 'red';
}

document.getElementById('box').onmouseout = function() {
    this.style.background = 'green';
}

document.getElementById('box').ondragstart = function(event) {
    event.dataTransfer.setData('text/plain', 'Arraste-me!');
}

document.getElementById('box').ondragover = function(event) {
    event.preventDefault();
}

document.getElementById('box').ondrop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
    document.getElementById('box').innerText = data
}

window.onload = function() {
    alert('Página carregada!')
}

var btnChallenge = document.getElementById('btnChallenge');
var contador = 0;

btnChallenge.onclick = function() {
    contador++;
    document.getElementById('count').innerText = contador
}

setTimeout(function() {
    alert(`Você clicou ${contador} vezes!`)
}, 10000);