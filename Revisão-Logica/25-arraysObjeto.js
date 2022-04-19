/**
 * essa é a estrutura:
 * const pessoas = [{}, {}, {}]
 */

const pessoa1 = { nome: "José", idade: 10, email: "jose@jose.com" };
const pessoa2 = { nome: "Cesar", idade: 10, email: "cesar@cesar.com" };
const pessoa3 = { nome: "Lucas", idade: 10, email: "lucas@lucas.com" };

//adicionando objetos externos
const pessoas = [pessoa1, pessoa2, pessoa3];
//chamando por indice
console.log(pessoas[0]);
//chamando apenas o nome do indice '0'
console.log(pessoas[0].nome);

console.log();

//ou pode adicionar objetos internos
const outrasPessoas = [
  { nome: "José", idade: 17, email: "jose@jose.com" },
  { nome: "Cesar", idade: 16, email: "cesar@cesar.com" },
  { nome: "Lucas", idade: 11, email: "lucas@lucas.com" }
];

console.log(outrasPessoas);

//Usando forin, para cada "propriedades" dentro do objeto outrasPessoas faça...
for (const propriedades in outrasPessoas) {
    console.log(`Olá ${outrasPessoas[propriedades].nome}, verifico que você tem ${outrasPessoas[propriedades].idade} anos`);
}