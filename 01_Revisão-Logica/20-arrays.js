const arr = new Array()
console.log("Array é do tipo:", typeof(arr));

//adicionando valores
arr[0] = "Guitarra"
arr[1] = 39
console.log(arr);

//array com valores
const arr2 = new Array(true, 20, "Paulo", new Array(2, 4, 10))
console.log(arr2);

//acessando apenas um valor do array
console.log(arr2[3]);

//acessando o valor do array interno
console.log(arr2[3][1]);

//quantos elementos essa array tem
console.log("quantos elementos essa array tem?",arr2.length);

// obtendo o valor do último elemento dentro do segundo array
console.log("último elemento",arr2[3] [arr2[3].length-1]);

/*  ele pega o array e exibe a qtd de indice que ele tem.
    por exemplo, o new Array(2, 4, 10) tem 2 indices.
    no exemplo abaixo mostra que "0" é o primeiro indice de valor 2
    0  1   2
   (2, 4, 10)
 */
console.log("quantos indices temos no terceiro objeto que é um array?",arr2[3].length-1);

//valores literal
const arr3 = ["Paulo", 39, [3, 6, 9], true]
console.log(arr3);

//exibindo o array de dentro
console.log(arr3[2]);

//acessando o primeiro valor do array
console.log(arr3[2][0]);

//adicionando um novo valor
arr3[4] = "Novo"
console.log(arr3);

//adicionando um valor com push()
arr3.push("Add com push()")
console.log(arr3);

//adicionando varios volores com push()
arr3.push("A","B","C")
console.log(arr3);

//acessando o valor do array com uma variável
let exibaValorArray = 5
console.log(arr3[exibaValorArray]); 

