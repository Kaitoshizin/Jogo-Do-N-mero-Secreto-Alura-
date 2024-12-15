let numeroJaSorteado = [];
let numerador = 10;
let numeraAleatório = gerarNumero();
console.log('O numero secreto é: ' + numeraAleatório);
let tentativas = 1;

telaInicial();

function telaMensagem(tag, mensagem){
    let campo = document.querySelector(tag);
    campo.innerHTML = mensagem;
}

function telaInicial() {
telaMensagem('h1','Jogo do Número Secreto');
telaMensagem('p','Digite um número de 1 a ' + numerador);
}

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == null || chute == '') {
        alert('PREENCHA TODOS OS CAMPOS!');
    } else {if (chute == numeraAleatório) {
        palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemVitoria = `Você acertou o número secreto: ${numeraAleatório}, em ${tentativas} ${palavraTentativas}!`;
        telaMensagem('p', mensagemVitoria);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('button').setAttribute('disabled', true);   

    } else { 
        if (chute < numeraAleatório) {
            telaMensagem('p', 'é número Secreto é maior');
        } else {
            telaMensagem('p', 'O número secreto é menor');
        }           
    } 
    limparCampo()
    console.log('O numero de tentativas é: ' +tentativas)
    tentativas++;
}
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let numerosNaLista = numeroJaSorteado.length;

    if (numerosNaLista == 4) {
        numeroJaSorteado = [];
    }

    if (numeroJaSorteado.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        numeroJaSorteado.push(numeroEscolhido);
        console.log('A lista está da seguinte forma: ' + numeroJaSorteado);
        return numeroEscolhido;
    }
}

palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; 

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function botaoRestart(){
    numeraAleatório = gerarNumero();
    console.log('O numero secreto é: ' + numeraAleatório);
    tentativas = 1;
    limparCampo();
    telaInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.querySelector('button').removeAttribute('disabled');
}