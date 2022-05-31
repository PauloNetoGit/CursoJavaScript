// string, number(int, floats), boolean
//a variavel não pode iniciar com números e não pode ter nelas hífem
//pode se usar aspas duplas ou simples na string
let minhaVar = "Estou exibindo o nome 'variável' entre aspas simples"
let minhaVar2 = 'Estou exibindo o nome "variável_2" entre aspas duplas'
let minhaVar3 = `template literal`
console.log(minhaVar)
console.log(minhaVar2)
console.log(minhaVar3)

//concatenação
let idade = 39
let msg = "Eu possuo " + idade + " anos"

//concatenação com template literal
let idade2 = 39
let msg2 = `Eu possuo ${idade2} anos`
console.log(msg2)

//typeof exibe o tipo primitivo das variáveis
console.log(typeof msg, typeof idade, typeof variavel, " -- ", 20);

//tipo de dados number
const n1 = 10
const n2 = 1.1
console.log(`O tipo de n1 é ${typeof n1} e seu valor é de ${n1}`)
console.log(`O tipo de N2 é ${typeof n2} e seu valor é de ${n2}`)

//tipo de dados boolean
const isInvalid = false
console.log(`isInvalide: ${isInvalid}`)









