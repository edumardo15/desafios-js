function desconto(){
    var produto = window.prompt("Qual produto que você quer comprar? ")
    var precooriginal = parseFloat(window.prompt("Qual o valor original deste produto? "))
    var desconto = precooriginal * 0.1
    var preconovo = precooriginal - desconto
    var mensagem = document.getElementById("valores")

    mensagem.innerHTML = "<h1>Calculando o desconto de 10% para " + produto + "</h1>"+"O preço original era de R$ " + precooriginal + "<br> Você acaba de ganhar R$" + desconto.toFixed(2) + " de desconto (-10%).<br>No fim você vai pagar R$" + preconovo.toFixed(2) + " no produto " + produto 

}