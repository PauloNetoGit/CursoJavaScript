var arr = [1, 2, 3]

//ele retorna "1" porque o número dois esta no indice "1"
console.log(arr.indexOf(2));

//ele retorna "-1" qualquer número que não faça parte do array retorna "-1"
console.log(arr.indexOf(4));

//isso serve para string, qualquer string retorna "-1" 
console.log(arr.indexOf("OI"));

//adicionando mais campos no array
arr.push(4, 5, 6, 5, 1)

console.log(arr);

//ele vai dizer que 5 está no indice 4, 
//porém temos outro número 5 no indice 6
console.log(arr.indexOf(5))

//para acessar o indece do segundo número 5
console.log(arr.lastIndexOf(5));