function getInteiroAlenatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)


}


let opcao = 0



while (opcao != 1) {
    opcao = getInteiroAlenatorioEntre(-1, 1000000)

    console.log(`Opção escolhida foi ${opcao}.`)

}