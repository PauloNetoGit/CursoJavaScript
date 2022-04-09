//Exemplo de uma pessoa com ARRAY
const nomes = ["Daniel", "Maria", "João"]
const idades = [40, 28, 35]
console.log(nomes[0], idades[0]);

console.log()

//Instanciando e usando um Objeto
const pessoa = new Object()

//Atribuindo valores
pessoa.nome = "Daniel"
pessoa.idade = 40

console.log(pessoa); 
console.log()

//Outra forma de chamar o valor dos objetos
console.log(pessoa["nome"]); 
console.log(pessoa["idade"]); 

console.log()

//A variável "prop" recebe o valor "idade", 
//"idade" é uma referencia do objeto "pessoa.idade".
//por isso ela exibe o valor "40" descrito na linha 13.
let prop = "idade"
console.log("Referenciando a pessoa.idade:",pessoa[prop]); 

console.log()

//Objeto comum
const outraPessoa = {
    nome: "Paulo",
    sobrenome: "neto",
    idade: 39
}

console.log(outraPessoa); 
