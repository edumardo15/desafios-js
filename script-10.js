function mudar() {
    let precooriginal = parseFloat(window.prompt("Qual era o preço anterior do produto?"))
    let preconovo = parseFloat(window.prompt("Qual é o preço atual do produto?"))
    let mensagem = window.document.getElementById("mensagem")

    mensagem.innerHTML = "<br><h1> Analisando os valores informados.</h1>"
    mensagem.innerHTML += `<br> O produto custava R$ ${precooriginal} e agora custa R$ ${preconovo}.<br>`

    if (precooriginal < preconovo) {
        mensagem.innerHTML += "<br> Hoje o produto está mais caro."
        let alterarpreco = preconovo - precooriginal
        mensagem.innerHTML += `<br> O preço subiu R$ ${alterarpreco} em relação ao preço anterior<br>`
        let porcentagem = (alterarpreco / precooriginal) * 100
        mensagem.innerHTML += `<br> Uma variação de ${porcentagem.toFixed(2)}% para cima<br>`
    }
    else if (preconovo < precooriginal) {
        mensagem.innerHTML += "<br> Hoje o produto está mais barato."
        let alterarpreco = precooriginal - preconovo
        mensagem.innerHTML += `<br> O preço caiu R$ ${alterarpreco} em relação ao preço anterior.<br>`
        let porcentagem = (alterarpreco / precooriginal) * 100
        mensagem.innerHTML += `<br> Uma variação de ${porcentagem.toFixed(2)}% para baixo.<br>`
    }
    else if (precooriginal == preconovo) {
        mensagem.innerHTML += "<br> Não houve alteração de preço.<br>"
    }
    else {
        mensagem.innerHTML = "<h2>Valor inválido tente novamente<h2>"
    }
}