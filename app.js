let numeroJaSorteado = [];
let numerador = 10;
let numeraAleatório = gerarNumero();
console.log('O numero secreto é: ' + numeraAleatório);
let tentativas = 1;

telaInicial();

//lista = array

//alguns comentários foram removidos, você ainda pode vê-los na versão anterior.

function telaMensagem(tag, mensagem){
    let campo = document.querySelector(tag);
    campo.innerHTML = mensagem;
}

// acima vemos uma função com parâmetros, que são funções com detalhes especificados no seu titulo.

// e nela fizemos algo para reduzir o código
// criamos um padrão de comportamento.
// antes teriamos de fazer da primeira forma
// 2 linhas de código pra algo simples toda vez que fossemos usar uma tag diferente
// com essa padronização, poderemos escrever apenas uma da seguinte maneira:
// telaMensagem('h1', 'batatas não são super heróis');
// isso faz o trabalho de pegar a tag que era o código: let titulo = document.querySelector('h1');
// e ainda nos permite escrever a mensagem na mesma linha, onde usavamos o cíodigo: titulo.innerHTML = 'Jogo do Número Secreto';

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

// está é uma função simples, que já está escrito no html, aqui no js, nós demos a ela um trabalho - uma FUNÇÃO
// getElementeById é porque nós temos dois botões, mas queremos um especifico.

// function gerarNumero(){
//     return parseInt(Math.random() * numerador + 1);
// }
// essa é uma função com retorno, ela retorna apenas o que pedimos a ela.

// a função acima será substituída, por isso virou um comentário, vamos a nova versão com mais funcionalidades para o projeto:

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

//Basicamente, isso faz com que não venhamos a ter números repetidos em partidas seguidas
// a lista começa vazia, mas usamos um comando para por todo o numero sorteado dentro dela
// e quando sorteamos algo q já está lá, ele busca gerar outro número no lugar
// para não haver erros, é necessário um comando para limpar a lista quando estiver cheia

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