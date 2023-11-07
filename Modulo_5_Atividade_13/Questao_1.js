const prompt = require('prompt-sync')();

function verificaEmail(email) {
    let index = email.indexOf('@');
    let dom = email.slice(index);
    let usuario = email.slice(0, index);

    if (dom == '@gmail.com') {
        console.log('O e-mail contém o domínio "@gmail.com".');
        console.log(`Nome de usuário: ${usuario}`);
    }
    else {
        console.log('O e-mail não contém o domínio "@gmail.com".');
        console.log(`O e-mail contém o domínio: ${dom}`);
    }
}

let email = prompt('Digite seu email: ');
verificaEmail(email)