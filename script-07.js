function converter() {
    var celsius = parseFloat(window.prompt("Digite a temperatura em °Celsius(C): "))
    var fahrenheit = (celsius * 1.8) + 32
    var kelvin = celsius + 273
    var mensagem = document.getElementById("temperatura")

    mensagem.innerHTML = "<br>" + fahrenheit.toFixed(2) + "°F (Fahrenheit)<br>"+ kelvin.toFixed(2) + "°K (Kelvin)"
}