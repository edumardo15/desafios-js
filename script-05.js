
function converter() {
    var m = parseFloat(window.prompt("Digite um valor em metros(m): "))
    var km = m / 1000
    var hm = m / 100
    var dam = m / 10
    var dm = m * 10
    var cm = m * 100
    var mm = m * 1000
    var conversao = document.getElementById("conversao")

    conversao.innerHTML = `<h1> A distância de ${m} metros corresponde a...</h1><br>${km} quilômetros (Km)<br>${hm} hectômetros(Hm)<br>${dam} decâmetros (Dam)<br>${dm} decímetros (Dm)<br>${cm} centímetros (Cm) <br>${mm} milímetros (Mm)`
}