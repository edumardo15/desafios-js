function comprar() {
    let produto = window.prompt("Qual o produto você quer comprar?")
    let preco = parseFloat(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    let pagamento = parseFloat(window.prompt(`Qual foi o valor que você deu para pagar ${produto}`))
    let troco = pagamento - preco

    window.alert(`Você comprou ${produto} que custou R$ ${preco.toFixed(2)}\nDeu R$ ${pagamento.toFixed(2)} em dinheiro e vai receber R$ ${troco.toFixed(2)} de troco\nVolte Sempre!`)
}