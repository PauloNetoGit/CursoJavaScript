/*
AND "&&", OR "||" e NOT "!"
Tabela verdade
*/

var x = true
var y = false

// as duas informações devem ser verdadeiras para retornar true
console.log(x && y) // false

// uma das informações deve ser verdadeiras para retornar true
console.log(x || y) // true

//puçando linha
console.log()

// negando o valor da variável
console.log(!x)
console.log(!y)

console.log()
/**
 * ***** EXERCICÍO ***** *
 * para uma pessoa viajar para o exterior:
 * - precisa ser maior de 18
 * OU
 * - Acompanhado pelos pais
 */
let idade = 15
let acompanhadosPelosPais = true

const podeViajar = (idade >= 18 || acompanhadosPelosPais == true)
console.log(`Pode viajar: ${podeViajar}`)

const podeViajar2 = (idade >= 18 && acompanhadosPelosPais == true)
console.log(`Pode viajar: ${podeViajar2}`)

