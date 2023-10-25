//fução sem retorno 

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10 ,4 ,5, 6 , 7, 8)
imprimirSoma()


//Função com retorno 
function soma(a , b , c = 3) {

return a + b + c

}

console.log(soma(2, 3 , 10))
console.log(soma(2, 3))
console.log(soma())