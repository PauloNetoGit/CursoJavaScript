/**
 * Curto circuito
 * ele verifica as expressões, no caso da expressão n = n || 10
 * a variável 'n' vai receber o valor de 'n' caso seja verdadeiro ou 10 
 * caso a segunda expressão seja verdadeiro.
 * se trocarmos o valor de n para zero a primeira expressão se torna false
 * e assim é exibida a segunda expressão com o valor de 10
 */

//aqui exibe a primeira expressão pois ela é verdadeira
let n = 1
n = n || 10
console.log(n);

//aqui exibe a segunda expressão
let msg = "" || "Verdade"
console.log(msg);

//primeira e a segunda expressão foi verificada, 
//sempre será exibido a última expressão no 'And'
let hello = "Olá" && "Mundo"
console.log(hello);

//quando uma das expressões forem falsa usando 'And' é exibido a expressão falsa,
//nesse caso o Not a Number
let x = NaN && "Olá Mundo"
console.log(x);