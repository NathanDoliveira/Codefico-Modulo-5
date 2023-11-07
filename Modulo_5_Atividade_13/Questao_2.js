const prompt = require('prompt-sync')();

while (true) {
    let nomeUsuario = prompt('Digite o seu nome de usuário: ');

    if (nomeUsuario.length >= 12) {
        let nome = nomeUsuario.toLowerCase();
        let arroba = nome.indexOf('@');

        if (arroba < 0) {
            console.log('ERRO! Usuários devém conter "@" no seu nome.');
        }
        if (nome.slice(0, 5) == 'admin') {
            console.log('ERRO! Usuários devem começar seu nome com "user".');
        }
        if (arroba > 0 && nome.slice(0, 4) == 'user') {
            console.log(`Nome de Usuário válido! Seu nome de usuário é: ${nome}`)
            break;
        }
    }  

    else {
        console.log('ERRO! O nome deve ter pelo menos 12 caracteres.')
    }
    
}