let n1 = 10.123;
let n2 = "2";

//o js faz a conversão implicita e exibe o resultado, ele converte a string para number
console.log(n1 * n2);

console.log(n1 - n2);

console.log(n1 / n2);

//já com o sinal de "+" ele concatena
console.log(n1 + n2);

//convertendo: parseInt, parseFloat, Number()
n2 = parseInt(n2);
console.log(typeof n2, n2);

n2 = parseFloat(n2);
console.log(typeof n2, n2);

n1 = Number(n1);
console.log(typeof n1, n1);

//NaN - Not a Number
let naoNumber = "a14a";

//converte "naoNumber" para inteiro, ele só consegue converter quando os primeiros caracters forem números
//isso só funciona com "parseInt" e "parseFloat"
naoNumber = parseInt(naoNumber); 
let eNumber = 2;
console.log(naoNumber + eNumber, typeof naoNumber, naoNumber); //tenta somar naoNumber + eNumber

//convertendo um número para String
let numero = 10
numero = numero.toString()
console.log(numero, "agora é uma",  typeof numero)

//Hexadecimal como parámetro
let x = 10 // o numro 10 equivale a letra 'a'
x = x.toString(16)//o parâmetro informa que é hexadecimal
console.log(x, "agora é uma",  typeof x)
