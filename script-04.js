function calcular() {
    var a = window.prompt("Digite o valor de A: ")
    var b = window.prompt("Digite o valor de B: ")
    var c = window.prompt("Digite o valor de C: ")
    var equacao = document.getElementById("equacao")
    var delta = Math.pow(b, 2) - 4 * a * c;

    equacao.innerHTML = "A equação atual é: <strong> " + a + "x² + " + b + "x + " + c + " = 0 </strong><br> O calculo realizado será: <strong>Δ = "+ b +"² - 4 . " + a + " . " + c + "</strong><br>O valor do calculo foi: <span class = 'detalhes'>Δ =" + delta + "</span>"
}