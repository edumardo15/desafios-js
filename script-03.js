function mostrar() {
    var numero = Number(window.prompt("Digite um número aleátorio: "))
    var antecessor = numero - 1
    var sucessor = numero + 1
    var mensagem = `Antes de ${numero}, temos o número ${antecessor}.\nDepois de ${numero}, temos o número ${sucessor}.`
    window.alert(mensagem)
}