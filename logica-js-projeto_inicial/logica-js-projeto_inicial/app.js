


alert('Boas vindas ao jogo do número secreto!');

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1); 
let chute; 
let tentativas = 1;


while(chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);

    //se o chute for igual ao número secreto
    if(numeroSecreto == chute){
        break;

    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto e menor que ${chute}`);

        }else{
            alert(`O número secreto e maior que ${chute}`);
        }

        tentativas++ ;
    }

}

//Operador ternário

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto! ( ${numeroSecreto} ) com ${tentativas} ${palavraTentativa}`);

/*
if(tentativas = 1){
    alert(`Você acertou o número secreto! ( ${numeroSecreto} ) com ${tentativas} tentativa`);
}else{
    alert(`Você acertou o número secreto! ( ${numeroSecreto} ) com ${tentativas} tentativas`);
}
*/

/*
let senhaDoSistema = "senhaTeste!";

let senha = prompt("Digite a senha do sistema:");

if (senha == senhaDoSistema){
    alert("Acesso ao sistema garantido");
}
*/
/*
alert('Boas vindas ao nosso site!');
/*
/*
let nome = Lua;
let idade = 25;
*/

/*
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos.');
let mensagemDeErro = ('Erro! Preencha todos os campos.');
alert(mensagemDeErro);

let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');

if(idade >= 18){
    alert('Pode tirar a habilitação');
}
*/
