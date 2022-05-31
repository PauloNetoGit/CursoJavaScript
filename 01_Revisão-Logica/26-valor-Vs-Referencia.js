/**
 * Exemplo de Referencia - 
 * quando a gente cria uma variável que aponta para um objeto ou um objeto,
 * esse apontamento é a referencia
 **/
function alteraArray(a){
    a.push("Adicionado") //adicionando ao parametro 'a' o valor chamado "Adicionado"
}

let arr = ["a"] // declarando um array com uma letra

alteraArray(arr) //chamando o método com a array "a"

console.log(arr); // o que vai ser exibido é a referência da variável
console.log();



/**
 * Exemplo de Valor - passando dado primitivo na função
 * quando a gente cria uma variável que aponta para um tipo primitivo,
 * esse apontamento é o valor da variável
 **/
function alteraPrimitivo(p){
    p += " Adicionado"
}

let msg = "Mensagem"
console.log(msg); // o que vai ser exibido é o valor da variável

alteraPrimitivo(msg)
console.log(msg); // o que vai ser exibido é o valor da variável


