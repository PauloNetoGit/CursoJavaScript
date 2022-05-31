//Quando temos apenas duas opções, tipo if e else. podemos usar o operador ternário 
//Sintaxe operador ternário
//let var = (idade >= 18)?"true":"false"

let idade = 18

let msgMaiorIdade = (idade >= 18)?"é maior de idade":"é menor de 18 anos"
console.log(msgMaiorIdade)

console.log()
// crie uma autorização para entrar em uma zona proibida, 
//se a autorização estiver correta escreva "Bem-vindo" senão "Entrada Proibida"
let autorizacao = 1524

let entrarNaZonaProibida = (autorizacao === 1524) ? "Bem-vindo" : "Entrada Proibida"
console.log(entrarNaZonaProibida)