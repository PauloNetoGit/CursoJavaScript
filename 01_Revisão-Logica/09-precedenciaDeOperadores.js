/**
 * A precedência de operadores determina a ordem em que os operadores são processados. 
 * Operadores com maior precedência são processados primeiro.
 */

let a = 3
let b = 4

let expressao = a + b * 5 
console.log(expressao) // returns 23

//para resolver isso devemos respeitar a precedencia
/**
    ( ): parênteses;
    [ ]: colchetes;
    { }: chaves;
    Números: 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9
    Símbolos: +, -, ÷, x

    Ordem de Operações das Expressões Numéricas

    Potenciação e Radiciação;
    Multiplicação e Divisão;
    Adição (soma) e Subtração.
 */

let x = 3
let y = 4

// estou garantindo que a soma está sendo executado antes da multiplicação 
let expressao2 = (x + y) * 5 
console.log(expressao2) // returns 35

