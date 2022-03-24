let x = 0
let i = 0
let y = 0
let j = 0
//exemplo de incrementos
x = x + 1
console.log("valor de 'x' é",x)

y += 1
console.log("valor de 'y' é",y)
console.log()

//pós incremento
console.log("valor de 'i' é",i++) //nesse passo ele exibe o valor de "i" e depois soma + 1
console.log("valor incrementado de 'i' é",i)   //nessa linha ele exibe o valor somado anteriormente

//pós decremento
i--
console.log("Decremento de 'i' é",i)

console.log()//Pulando Linha

//pré incremento
console.log("valor de 'j' incrementado é",++j) //nesse passo ele incrementa e exibe o valor de "j"
console.log("apenas exibe o valor incrementado antes",j) //exibe o atual valor de "j"

//pré decremento
--j
console.log("Decremento de 'j' é",j)

