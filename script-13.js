function media() {
    let nome = prompt("Digite o nome do aluno:");
    let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));

    let media = (nota1 + nota2) / 2;
    let situacao = "";
    let mensagem = document.getElementById("msg");

    if (media < 3) {
        situacao = "REPROVADO";
        mensagem.innerHTML = "<br><h1><span class='detalhes'><strong>Analisando situação de " + nome + "</strong></span></h1><br>Com notas de " + nota1 + " e " + nota2 + ", a <strong>média é de " + media.toFixed(2) + "</strong><br>Com média abaixo de 3, o aluno está <span class='marcador reprovado'>" + situacao + "</span>";
    } else if (media >= 3 && media <= 6) {
        situacao = "RECUPERAÇÃO";
        mensagem.innerHTML = "<br><h1><span class='detalhes'><strong>Analisando situação de " + nome + "</strong></span></h1><br>Com notas de " + nota1 + " e " + nota2 + ", <strong>a média é de " + media.toFixed(2) + "</strong><br>Com média entre 3 e 6, o aluno está em <span class='marcador recuperacao'>" + situacao + "</span>";
    } else {
        situacao = "APROVADO";
        mensagem.innerHTML = "<br><h1><span class='detalhes'><strong>Analisando situação de " + nome + "</strong></span></h1><br>Com notas de " + nota1 + " e " + nota2 + ", <strong>a média é de " + media.toFixed(2) + "</strong><br>Com média acima de 6, o aluno está <span class='marcador aprovado'>" + situacao + "</span>";
    }
}