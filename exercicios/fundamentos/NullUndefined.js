let valor // não inicializada
console.log(valor)

valor = null //ausência de valor

console.log(valor)

//console.log(valor.tostring()) erro



const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)
produto.preco= undefined//não atribuir undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco=null //sem preco
console.log(!!produto.preco)
console.log(produto)