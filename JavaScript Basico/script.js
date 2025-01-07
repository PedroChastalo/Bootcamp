var area = document.getElementById('area');

function entrar() {
    var nome = prom("Digite seu nome:");

    if(nome === '' || nome === null) {
        alert("Nome inválido");
        area.innerHTML = 'Clique no botão para acessar...';
    }else {
        area.innerHTML = 'Bem vindo ' + nome;

    let botarSair = document.createElement('button');
    botarSair.textContent = 'Sair';
    botarSair.onclick = sair;

    area.appendChild(botarSair);

    }
}

function sair() {
    alert("Ate mais!");
    area.innerHTML = 'Clique no botão para acessar...';
}

function MediaAluno(nota1, nota2) {
    var media = (nota1 + nota2) / 2;
    return media;   

    if(media >= 5){
        console.log('Aprovado');
    }else if(media < 5){
        console.log('Reprovado');
    }
}

function aluno(nome, curso){
    var mensagem = "O aluno " + nome + " está cursando " + curso;
    console.log(mensagem);
}

function ArrayFruta() {
    var frutas = ['Maçã', 'Banana', 'Laranja', 'Manga'];
    for (var i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
}

function SwitchSemana() {
    var dia = new Date().getDay();
    var diaNome;

    switch (dia) {
        case 0:
            diaNome = 'Domingo';
            break;
        case 1:
            diaNome = 'Segunda-feira';
            break;
        case 2:
            diaNome = 'Terça-feira';
            break;
        case 3:
            diaNome = 'Quarta-feira';
            break;
        case 4:
            diaNome = 'Quinta-feira';
            break;
        case 5:
            diaNome = 'Sexta-feira';
            break;
        case 6:
            diaNome = 'Sábado';
            break;
        default:
            diaNome = 'Desconhecido';
    }

    console.log('Hoje é ' + diaNome);
}

function exemploManipulacaoData() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1;
    var ano = dataAtual.getFullYear();

    console.log('Data atual: ' + dia + '/' + mes + '/' + ano);
}