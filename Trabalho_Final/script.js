const celulas = document.querySelectorAll('.celula');
const statusMessage = document.getElementById('mensagem-status');
const restartButton = document.getElementById('restart-button');
const placarX = document.getElementById('jogadorX');
const placarO = document.getElementById('jogadorO');

let jogadorAtual = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let jogoAtivo = true;
let vitoriasX = 0;
let vitoriasO = 0;

function vencedor() {
    const padroesVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const padrao of padroesVitoria) {
        const [a, b, c] = padrao;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}

function empate() {
    return !gameBoard.includes('');
}

function atualizarPlacar() {
    placarX.innerText = `Jogador X: ${vitoriasX}`;
    placarO.innerText = `Jogador O: ${vitoriasO}`;
}

function clicarCelula(index) {
    if (!jogoAtivo || gameBoard[index] !== '') {
        return;
    }

    gameBoard[index] = jogadorAtual;
    celulas[index].innerText = jogadorAtual;

    if (vencedor()) {
        statusMessage.innerText = `Jogador ${jogadorAtual} venceu!`;
        jogoAtivo = false;
        if (jogadorAtual == 'X') {
            vitoriasX += 1;
        }

        else {
            vitoriasO += 1;
        }

        atualizarPlacar();
    }

    else if (empate()) {
        statusMessage.innerText = 'Empate!';
        jogoAtivo = false;
    }

    else {
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
        statusMessage.innerText = `Vez do jogador ${jogadorAtual}`;
    }
}

function restart() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    jogoAtivo = true;
    jogadorAtual = 'X';
    statusMessage.innerText = 'Vez do jogador X';

    celulas.forEach((celula) => {
        celula.innerText = '';
    });
}

celulas.forEach((celula, index) => {
    celula.addEventListener('click', () => clicarCelula(index));
});

restartButton.addEventListener('click', restart);