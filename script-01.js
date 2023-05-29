function bemvindo() {
    let nome = window.prompt('Qual o seu nome? ')
    let idade = Number(window.prompt(`Quantos anos você tem, ${nome}? `))
    window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
}